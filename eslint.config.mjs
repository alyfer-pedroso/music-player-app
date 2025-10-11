import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	// Global ignores
	{
		ignores: [
			'**/node_modules/**',
			'**/.expo/**',
			'**/.next/**',
			'**/__generated__/**',
			'**/build/**',
			'react-native-lab/react-native/**',
			'docs/react-native-website/**',
			'**/android/**',
			'**/assets/**',
			'**/bin/**',
			'**/fastlane/**',
			'**/ios/**',
			'**/kotlin/providers/**',
			'**/vendored/**',
			'docs/public/static/**',
		],
	},
	// Base config
	js.configs.recommended,
	// Main configuration
	{
		files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
			react: react,
			'react-hooks': reactHooks,
		},
		languageOptions: {
			globals: {
				...globals.node,
			},
			parser: tsParser,
			ecmaVersion: 12,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			// TypeScript recommended rules
			...typescriptEslint.configs.recommended.rules,
			// React recommended rules
			...react.configs.recommended.rules,
			// React Hooks recommended rules
			...reactHooks.configs.recommended.rules,
			// Custom rules
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
