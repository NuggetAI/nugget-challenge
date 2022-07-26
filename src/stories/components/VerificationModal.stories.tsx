import { ComponentMeta, ComponentStory } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { action } from '@storybook/addon-actions'
import { withDesign } from 'storybook-addon-designs'
import React from 'react'
import { VerificationModal } from '../../components/VerificationModal'

export default {
  title: 'Verification Modal',
  component: VerificationModal,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8xjCxEwrXKPx4Zv7E3Kqbz/Product-designs?node-id=1981%3A52751',
    },
  },
} as ComponentMeta<typeof VerificationModal>

const Template: ComponentStory<typeof VerificationModal> = (args) => <VerificationModal {...args} />

export const TestVerifyModal = Template.bind({})

TestVerifyModal.args = {
  open: false,
  onOpenChange: (open: boolean) => action('Handle modal open change.')(),
  sendCode: () => action('send new verification code')(),
  verifyCode: (code: string) => action('verify code')(code),
}
