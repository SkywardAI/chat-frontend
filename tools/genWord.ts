


export const genWord = () => {
	const len = Math.floor(Math.random() * 10) + 1
	let i = 0
	// 97 - 122
	const string = []
	while (i < len) {
		const number = Math.floor(Math.random() * 26 + 97)
		string.push(String.fromCharCode(number))
		i++
	}
	return string.join('')
}

export const genSentence = () => {
	const len = Math.floor(Math.random() * 100) + 1
	let i = 0
	const sentence = []
	while (i < len) {
		const word = genWord()
		sentence.push(word)
		i++
	}
	return sentence.join(' ')
}