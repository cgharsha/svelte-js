// import globals from "globals";
// import pluginJs from "@eslint/js";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['dist', './node_modules'] },
  {
    files: ['**/*.{js,svelte}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: {},
    plugins: {},
    rules: {
      ...js.configs.recommended.rules
    }
  }
]
