import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ),
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
]
