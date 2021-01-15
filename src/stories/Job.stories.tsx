import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Job } from '../container/Jobs'

export default {
  title: 'Design System/Job',
  component: Job,
} as Meta

const Template: Story = (args) => <Job />

export const Basic = Template.bind({})
