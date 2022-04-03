module.exports = {
	extends: ['react', 'prettier'],
	settings: {
		react: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	rules: {
		'no-console': 'warn',
	},
}
