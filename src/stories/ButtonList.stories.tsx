import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ButtonList } from '../components'
import { IButtonListProps, IOptions } from '../Interfaces/Interfaces'

export default {
  title: 'Design System/ButtonList',
  component: ButtonList,
} as Meta

const Template: Story<IButtonListProps> = (args) => <ButtonList {...args} />

export const showList = Template.bind({})

showList.args = {
  options: [
    { color: 'blue', label: 'Draft' },
    { color: 'yellow', label: 'Active' },
    { color: 'green', label: 'Complete' },
    { color: 'violet', label: 'Archive' },
  ],
  nameButton: 'Active',
  helper: 'Next Stage: Complete',
  handlerChangeButton: () => console.log('handlerChangeButton'),
  show: true,
  setShow: () => console.log('setShow'),
}
export const notShowList = Template.bind({})

notShowList.args = {
  options: [
    { color: 'blue', label: 'Draft' },
    { color: 'yellow', label: 'Active' },
    { color: 'green', label: 'Complete' },
    { color: 'violet', label: 'Archive' },
  ],
  nameButton: 'Active',
  helper: 'Next Stage: Complete',
  handlerChangeButton: () => console.log('handlerChangeButton'),
  show: false,
  setShow: () => console.log('setShow'),
}

export const completed = Template.bind({})

completed.args = {
  options: [
    { color: 'blue', label: 'Draft' },
    { color: 'yellow', label: 'Active' },
    { color: 'green', label: 'Complete' },
    { color: 'violet', label: 'Archive' },
  ],
  nameButton: 'Completed',
  helper: 'Next Stage: Complete',
  handlerChangeButton: () => console.log('handlerChangeButton'),
  show: false,
  setShow: () => console.log('setShow'),
}
