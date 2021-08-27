import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { Message } from '../models'
// import { DEFAULT_AVATAR_URL } from '../config/constants'
import { images } from '../images'

const useStyles = makeStyles({
  messageItem: {
    display: 'flex',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    marginRight: 10,
    overflow: 'hidden'
  },
  username: {
    color: '#323b4b',
    fontSize: 14,
    fontWeight: 600,
  },
  message: {
    color: '#5e6c84',
    fontSize: 15,
  }
})

interface MessageItemProps {
  className: string,
  message: Message,
}

const MessageItem: FC<MessageItemProps> = ({className, message}: MessageItemProps) => {
  const classes = useStyles();

  return (
    <Box className={[className, classes.messageItem].join(' ')}>
      <img className={classes.avatar} src={ images.avatar } alt=''/>

      <Box>
        <Typography className={classes.username}>{message.userName}</Typography>
        <Typography className={classes.message}>{message.message}</Typography>
      </Box>
    </Box>
  )
}

export default MessageItem;