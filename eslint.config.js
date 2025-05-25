import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
// This is only required if extending a config with rules that conflict with prettier
// import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.node },
	},
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	{
		files: ['**/*.json'],
		ignores: ['tsconfig.*json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.jsonc', 'tsconfig.*json', '.vscode/settings.json'],
		plugins: { json },
		language: 'json/jsonc',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/commonmark',
		extends: ['markdown/recommended'],
	},
	// This can be used isolated to add individual rules over prettier
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: {
			'@stylistic': stylistic,
		},
		languageOptions: { parser: tsParser, sourceType: 'module', globals: globals.node },
		ignores: ['**/dist'],
		rules: {
			'@stylistic/operator-linebreak': ['error', 'before'],
		},
	},
	// This is only required if extending a config with rules that conflict with prettier
	// eslintConfigPrettier
]);
