export enum Chars {
    alpha,
    alphaLower,
    numeric,
    special,
    alphaNumeric,
    alphaNumericLower,
    full
}

export interface TokenGenerationConfiguration {
    type: Chars
    length?: number
    leadWithAlpha?: boolean
}
