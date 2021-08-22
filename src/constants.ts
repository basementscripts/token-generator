import { Chars, Pattern } from './types'
import { combinePatterns } from './utils'

const alphaNumeric = combinePatterns(Pattern.ALPHA, Pattern.NUMERIC)
/**
 * exports TokenPattern
 */
export const TokenPattern: Map<Chars, string> = new Map<Chars, string>()
TokenPattern.set(Chars.Alpha, Pattern.ALPHA)
TokenPattern.set(Chars.AlphaLower, Pattern.ALPHA_LOWER)
TokenPattern.set(Chars.Numeric, Pattern.NUMERIC)
TokenPattern.set(Chars.Special, Pattern.SPECIAL)
TokenPattern.set(Chars.AlphaNumeric, alphaNumeric)
TokenPattern.set(Chars.AlphaNumericLower, combinePatterns(Pattern.ALPHA_LOWER, Pattern.NUMERIC))
TokenPattern.set(Chars.Full, combinePatterns(alphaNumeric, Pattern.SPECIAL))
