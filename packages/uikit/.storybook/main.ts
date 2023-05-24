import type {StorybookConfig} from '@storybook/react-vite'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  // core: {
  //   builder: '@storybook/builder-vite' // 👈 The builder enabled here.
  // },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/uikit/vite.config.ts'
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config, options) {
    return config
  }
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     // Add dependencies to pre-optimization
  //     optimizeDeps: {
  //       include: ['storybook-dark-mode']
  //     }
  //   })
  // }
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
