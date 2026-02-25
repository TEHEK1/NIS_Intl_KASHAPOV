import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    languageOptions: {
      ...html.configs['flat/recommended'].languageOptions,
      parser: htmlParser,
    },
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/indent': 'off',
      '@html-eslint/no-extra-spacing-attrs': 'off',
      '@html-eslint/require-closing-tags': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },
    },
  },
  eslintConfigPrettier,
]);
