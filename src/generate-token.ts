import { TokenPattern } from './constants'
import { Chars, TokenGenerationConfiguration } from './types'

/**
 * Generate a token of varied length and type
 * @param {TokenGenerationConfiguration} config
 * @param {Chars} config.type
 * @param {number} config.length
 */
export const generateToken = ({
	type = Chars.AlphaNumeric,
	length = 32,
	pattern: injectedPattern
}: TokenGenerationConfiguration = {}): string => {
	const pattern = injectedPattern || TokenPattern.get(type)
	const totalChars = pattern.length
	return Array.from(Array(length).keys()).reduce((token: string) => {
		token += pattern.charAt(Math.floor(Math.random() * totalChars))
		return token
	}, '')
}
