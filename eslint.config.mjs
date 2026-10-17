import pluginJs from '@eslint/js';
import globals from 'globals';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/node_modules/**',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
  pluginJs.configs.recommended,
  { languageOptions: { globals: globals.node } },
  { rules: { 'no-unused-vars': 'error' } },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': 'off',
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
        },
      ],
    },
  },
];
