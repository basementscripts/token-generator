const { generateToken } = require('../lib')

describe('Generate Token', () => {
	test('It generates a 32 Char String', () => {
		const token = generateToken()
		expect(token.length).toEqual(32)
	})
})
