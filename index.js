module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'plugin:optimize-regex/recommended',
		'plugin:import/recommended',
		'problems',
	],
	'plugins': [
		'simple-import-sort',
		'optimize-regex',
		'import',
	],
	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': '2021',
	},
	'rules': {
		'simple-import-sort/imports': [ 'error' ],
		'simple-import-sort/exports': [ 'error' ],
		'class-methods-use-this': [ 'off' ],
		'array-bracket-spacing': [ 'error', 'always', {
			'objectsInArrays': true,
			'arraysInArrays': true,
			'singleValue': true,
		} ],
		'object-curly-spacing': [ 'error', 'always', {
			'objectsInObjects': true,
			'arraysInObjects': true,
		} ],
		'no-param-reassign': [ 'off' ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'no-console': [ 'off' ],
		'no-shadow': [ 'error' ],
		'no-tabs': [ 'off' ],
		'indent': [ 'off' ],
		'quotes': [ 'error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true } ],
		'semi': [ 'error' ],
	},
};
