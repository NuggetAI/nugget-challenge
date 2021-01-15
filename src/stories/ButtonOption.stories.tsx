import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ButtonOption } from '../components'
import { IButtonProps } from '../Interfaces/Interfaces'

export default {
  title: 'Design System/ButtonOption',
  component: ButtonOption,
} as Meta

const Template: Story<IButtonProps> = (args) => <ButtonOption {...args} />

export const Basic = Template.bind({})

Basic.args = {}

Basic.args = {
  color: 'blue',
  label: 'Draft',
}
