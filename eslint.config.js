import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', 'node_modules']
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  eslintConfigPrettier,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],

      // imports
      'no-duplicate-imports': 'warn',
      'sort-imports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React первым
            ['^react$', '^react-dom', '^react'],

            // остальные внешние пакеты
            ['^@?\\w'],

            // относительные импорты
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            // стили последним блоком
            ['^.+\\.s?css$']
          ]
        }
      ],

      // empty lines / spacing
      'no-multiple-empty-lines': [
        'warn',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0
        }
      ],
      'no-multi-spaces': 'warn',
      'no-trailing-spaces': 'warn',

      // syntax / suspicious code
      'no-unreachable': 'error',
      'no-unused-expressions': 'warn',
      'no-extra-semi': 'warn',
      'no-console': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn'
    }
  }
];
