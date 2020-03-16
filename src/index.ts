import { 
    Chars, 
    TokenGenerationConfiguration 
} from './types'

const combinePatterns = (...patterns: string[]): string => patterns.join('')
const patternAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const patternAlphaLower = 'abcdefghijklmnopqrstuvwxyz'
const patternNumeric = '0123456789'
const patternSpecial = '!@#$%^&*()-_=+[{]}<>'
const alphaNumeric = combinePatterns(patternAlpha, patternNumeric)
/**
 * exports TokenPattern
 */
export const TokenPattern:Map<Chars, string> = new Map<Chars, string>()
TokenPattern.set(Chars.alpha, patternAlpha)
TokenPattern.set(Chars.alphaLower, patternAlphaLower)
TokenPattern.set(Chars.numeric, patternNumeric)
TokenPattern.set(Chars.special, patternSpecial)
TokenPattern.set(Chars.alphaNumeric, alphaNumeric)
TokenPattern.set(Chars.alphaNumericLower, combinePatterns(patternAlphaLower, patternNumeric))
TokenPattern.set(Chars.full, combinePatterns(alphaNumeric, patternSpecial))

/**
 * Generate a token of varied length and type
 * @param {TokenGenerationConfiguration} config 
 * @param {Chars} config.type
 * @param {number} config.length
 */
export const generateToken = (config?: TokenGenerationConfiguration): string => {
    let token = [];
    // get the pattern from the TokenPattern Chars Map
    const charType: Chars = config && config.type 
        ? config.type 
        : Chars.alphaNumeric
    const pattern = TokenPattern.get(charType)
    // set the string length to 32 if the length is not provided in the config
    const strLength: number = config && config.length ? config.length : 32
    for (let i = 0; i < strLength; i++) {
        token.push(pattern.charAt(Math.floor(Math.random() * pattern.length)));
    }
    return token.join('')
}
