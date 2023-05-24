import './tailwind-imports.css'
import {Preview} from '@storybook/react'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Colors', 'Typography', 'Button']
      }
    }
  }
}

export default preview
