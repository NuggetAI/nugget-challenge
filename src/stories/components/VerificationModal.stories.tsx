import { ComponentMeta, ComponentStory } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { withDesign } from 'storybook-addon-designs'

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
  open: true,
  onOpenChange: (open: boolean) => console.log('modal closed'),
  sendCode: () => console.log('code sent'),
}
