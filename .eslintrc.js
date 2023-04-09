module.exports = {
	root: true,
	extends: ['moon', 'moon/node'],
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'sort-keys': 'off',
		'import/no-default-export': 'off',
		'@typescript-eslint/no-shadow': 'warn',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unused-vars': 'warn'
	},
	overrides: [
		{
			files: ['scripts/**/*'],
			rules: {
				'no-console': 'off',
				'no-magic-numbers': 'off',
				'promise/prefer-await-to-callbacks': 'off',
			},
		},
		{
			files: ['**/*'],
			rules: {
				// Path aliases
				'import/no-unresolved': 'off',
			},
		},
	],
};
