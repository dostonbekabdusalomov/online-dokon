// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
    semi: ['error', 'never']
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended']
})
