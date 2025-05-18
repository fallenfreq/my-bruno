import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { js },
        extends: ['js/recommended']
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.node }
    },
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        files: ['**/*.json'],
        ignores: ['tsconfig.*json'],
        plugins: { json },
        language: 'json/json',
        extends: ['json/recommended']
    },
    {
        files: ['**/*.jsonc', 'tsconfig.*json'],
        plugins: { json },
        language: 'json/jsonc',
        extends: ['json/recommended']
    },
    {
        files: ['**/*.md'],
        plugins: { markdown },
        language: 'markdown/commonmark',
        extends: ['markdown/recommended']
    },
    {
        rules: {
            'no-console': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off'
        },
        ignores: ['**/dist']
    },
    eslintConfigPrettier
]);
