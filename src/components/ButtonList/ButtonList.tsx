import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonOption } from '../ButtonOption'
import { IButtonListProps } from '../../Interfaces/Interfaces'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export interface IListProps {
  hidden?: boolean
}
const ButtonList: React.FC<IButtonListProps> = ({
  options,
  nameButton,
  helper,
  handlerChangeButton,
  show,
  setShow,
}) => {
  const optionsRender = options.map((option) => {
    return <ButtonOption color={option.color} label={option.label} />
  })
  return (
    <StyledButtonList>
      <StyleButtons>
        <StyleButton onClick={() => setShow(!show)}>{nameButton}</StyleButton>
        <StyleButtonIcon onClick={() => handlerChangeButton()}>
          <NavigateNextIcon />
        </StyleButtonIcon>
      </StyleButtons>
      <StyledListButtons hidden={show}>{optionsRender}</StyledListButtons>
    </StyledButtonList>
  )
}

ButtonList.defaultProps = {
  options: [],
  nameButton: '',
  helper: '',
  handlerChangeButton: () => {},
}

export { ButtonList }

const StyledButtonList = styled.div`
  width: 150px;
`

const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

const StyleButton = styled.button`
  background-color: #ffcf5c;
  height: 30px;
  border: 4px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  width: 100px;
`
const StyleButtonIcon = styled.button`
  background-color: #ffcf5c;
  height: 30px;
  border: 4px;
  color: white;
  width: 50px;
`

const StyledListButtons = styled.div<IListProps>`
  && {
    display: ${({ hidden }) => (hidden ? 'block' : 'none')};
    padding-left: 20px;
    width: 120px;
  }
`
