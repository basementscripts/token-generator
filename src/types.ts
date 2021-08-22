export type AlphaNumeric = string | number
export enum Chars {
	Alpha = 'alpha',
	AlphaLower = 'alphaLower',
	Numeric = 'numeric',
	Special = 'special',
	AlphaNumeric = 'alphaNumeric',
	AlphaNumericLower = 'alphaNumericLower',
	Full = 'full'
}

export interface TokenGenerationConfiguration {
	type?: Chars
	length?: number
	leadWithAlpha?: boolean
	pattern?: string
}

export enum Pattern {
	ALPHA = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz',
	NUMERIC = '0123456789',
	SPECIAL = '!@#$%^&*()-_=+[{]}<>'
}
