import React, {FC, useState, useEffect} from 'react'
import styled from 'styled-components'
import Comment from './component/comment'


const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InputTitle = styled.div`
  margin: 0 239px 12px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #323b4b;
`

const Input = styled.input`
  width: 302px;
  height: 40px;
  flex-grow: 0;
  margin: 12px 0 0;
  padding: 8px 179px 8px 16px;
  border-radius: 4px;
  border: solid 1px #e9ecee;
  background-color: #fff;
`;


const Button = styled.button`
  width: 69px;
  height: 32px;
  flex-grow: 0;
  margin: 17px 0 32px 155px;
  padding: 6px 5px 6.8px;
  border-radius: 4px;
  background-color: rgba(239, 239, 239, 0.5);
`;

const CommentContainer = styled.div`
  
`


const CommentTitle = styled.div`
  margin: 32px 99px 29px 2px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #323b4b;
`

const demoData = [
  {
    date: new Date().toLocaleTimeString(),
    comment: 'Hello'
  },
  {
    date: new Date().toLocaleTimeString(),
    comment: 'Hello'
  },
]

const App = () => {
  const [comments, setComments] = useState(demoData)
  const [input, setInput] = useState('')

  const onPush = () => {
    setComments(comments => [{
      date: new Date().toLocaleTimeString(),
      comment: input
    }, ...comments])
    setInput('')
  }

  return <Wrapper>
    <InputContainer>
      <InputTitle>Comment</InputTitle>
      <Input placeholder="Enter a comment" value={input} onChange={e => setInput(e.target.value)} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
        <Button onClick={onPush}>Submit</Button>
      </div>
    </InputContainer>
    <CommentContainer>
      <CommentTitle>{comments.length} Messages</CommentTitle>
      {
        comments.map((item, index) => (
          <Comment key={index} message={item.comment} date={item.date}/>
        ))
      }
    </CommentContainer>
  </Wrapper>
}

export default App
