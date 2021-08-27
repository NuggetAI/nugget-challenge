import React, { ChangeEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Box, TextField, Typography } from '@material-ui/core'
import { Message } from '../models'
import { MessageItem } from '.';

const useStyles = makeStyles({
  messageListBox: {
    width: 400,
    height: 800,
    margin: 'auto',
    overflow: 'hidden',

    '& .MuiCardContent-root':{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  },
  bold: {
    color: '#323b4b',
    fontSize: 14,
    fontWeight: 600,
  },
  input: {
    width: '100%'
  },
  messageCount: {
    marginTop: 20,
  },
  messsageList: {
    flex: '1 1',
    margin: '10px 0',
    overflow: 'auto'
  },
  message: {
    padding: '10px 0',
    boxSizing: 'border-box'
  }
})

const MessageList = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState<string>('')
  const [messages, updateMessages] = useState<Message[]>([])

  const onAddNewMessage = (e: any) => {
    if (e.charCode !== 13 || !inputValue) {
      return
    }

    const newMessage: Message = {
      id: messages.length,
      message: inputValue,
      userName: 'Author',
      dateTime: new Date()
    };

    updateMessages([newMessage, ...messages])
    setInputValue('')
  }

  return (
    <Card className={classes.messageListBox}>
      <CardContent>
        <Box>
          <Typography className={classes.bold}>
            Comment
          </Typography>

          <TextField 
            className={classes.input}
            value={inputValue}
            variant='outlined'
            placeholder='Enter a comment'
            onKeyPress={onAddNewMessage}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value)
            }}
          />
        </Box>

        <Box className={classes.messageCount}>
          <Typography className={classes.bold}>
            {`${messages.length} Messsages`}
          </Typography>
        </Box>

        <Box className={classes.messsageList}>

          { messages.map((m: Message) => {
            return (
              <MessageItem key={m.id} message={m} className={classes.message}/>
            )
          })}
        </Box>
      </CardContent>
    </Card>
  )
}

export default MessageList;