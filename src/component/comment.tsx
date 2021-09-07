import React, {FC} from 'react'
import styled from 'styled-components'

interface CommentProps {
  message: string,
  date: string
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

const CommentWrap = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`

const CommentTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 38px;
`

const Text = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #5e6c84;
`

const Comment: FC<CommentProps> = ({message, date}) => {
  return <Wrap>
    <Avatar src={'https://material-ui.com/static/images/avatar/1.jpg'}></Avatar>
    <CommentWrap>
      <CommentTitleWrapper>
        <Text style={{marginRight: '13px', fontWeight: 'bold'}}>
        Emily Young
        </Text>
        <Text>
          {date}
        </Text>
      </CommentTitleWrapper>
      <Text style={{ marginTop: '10px'}}>
        {message}
      </Text>
    </CommentWrap>
  </Wrap>
}

export default Comment
