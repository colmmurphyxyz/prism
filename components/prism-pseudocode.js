Prism.languages.pseudocode = {
	'comment': {
		pattern: /\/\/[^\n]*/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /".*"/,
		greedy: false
	},
	'dec-integer': {
		pattern: /[1-9]\d*|0/i,
		lookbehind: false,
		greedy: true,
		alias: 'number'
	},
	'dec-real': {
		pattern: /[1-9]\d*\.\d+|0\.0/,
		greedy: false,
		lookbehind: false,
		greedy: true,
		alias: 'number'
	},
	'keyword': /\b(?:array|downto|else|for|if|let|new|print|repeat|return|to|until|while)\b/i,
	'boolean': /\b(?:true|false|nil)\b/i,
	'operator': /[-+=\*]=?|!=|\^|<[<=>]?|>[=>]?|\\\\=?|and|or|not|xor/,
	'punctuation': /[;(),]/
};

Prism.languages.pc = Prism.languages.pseudocode;