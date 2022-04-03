module.exports = {
	extends: ['vue', 'prettier'],
	settings: {
		vue: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	rules: {
		'no-console': 'warn',
	},
}
