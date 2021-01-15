import React from 'react'
import styled from 'styled-components'
import { IButtonProps } from '../../Interfaces/Interfaces'

const ButtonOption: React.FC<IButtonProps> = ({ color, label }) => {
  return (
    <StyledButtonOption>
      <StyledOptionColor color={color} />
      <StyledOptionLabel>{label}</StyledOptionLabel>
    </StyledButtonOption>
  )
}

ButtonOption.defaultProps = {}

export { ButtonOption }

const StyledButtonOption = styled.div`
  display: flex;
  flex-direction: row;
  width: 160px;
  height: 18px;
  padding: 5px;
  object-fit: contain;
`
export interface IOptionsProps {
  color?: string
}
const StyledOptionColor = styled.div<IOptionsProps>`
  && {
    background-color: ${({ color }) => (color ? color : 'blue')};
    width: 15px;
    margin-right: 5px;
    border-radius: 3px;
    height: 15px;
  }
`
const StyledOptionLabel = styled.div`
  font-size: 14px;
`
