import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')]);

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...patchedConfig,
  ...ts.configs.recommended,
  prettierConfigRecommended,
  { ignores: ['.next/*'] },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      'prettier/prettier': 'warn',
    },
  },
];

export default config;
