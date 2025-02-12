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
		alias: 'number'
	},
	'dec-real': {
		pattern: /[1-9]\d*\.\d+|0\.0/,
		alias: 'number'
	},
	'keyword': /\b(?:a|array|be|downto|else|for|if|let|new|print|repeat|return|to|until|while)\b/i,
	'function': {
		pattern: /\b[a-zA-Z$][a-zA-Z0-9'\-_^${}\\]*(?=\()/,
		lookbehind: false
	},
	'boolean': /\b(?:true|false|nil)\b/i,
	'operator': /[-+=\*]=?|!=|\^|<[<=>]?|>[=>]?|\\\\=?|and|or|not|xor/,
	'punctuation': /[;()\[\],]/
};

Prism.languages.pc = Prism.languages.pseudocode;