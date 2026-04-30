import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      /**
       * Common rules
       */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      /**
       * TypeScript
       */
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      /**
       * React / Next.js
       */
      'react/jsx-key': 'error',
      'react/self-closing-comp': 'error',

      /**
       * Imports
       */
      'sort-imports': [
        'warn',
        {
          ignoreDeclarationSort: true,
          ignoreCase: true,
        },
      ],
    },
  },

  eslintConfigPrettier,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
