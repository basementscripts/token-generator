# `@basementscripts/token-generator`

![Coverage](./badge.svg)

Generate random char string of alpha, numeric, and special characters.

## Getting Started

```
$ yarn add @basementscripts/token-generator
```

## Options

`type` - Character type of the token string available options are;

- `Alpha` - alpha upper and lower chars only `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
- `AlphaLower` - alpha lower chars only `abcdefghijklmnopqrstuvwxyz`
- `Numeric` - numeric chars only `0123456789`
- `Special` - special chars only `!@#$%^&*()-_=+[{]}<>`
- `AlphaNumeric` - alpha and numeric chars only `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
- `AlphaNumericLower` - alpha and numeric chars lowercase only `0123456789abcdefghijklmnopqrstuvwxyz`
- `Full` - includes all available chars as potential `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[{]}<>`

`length` - The total length of the string desired

`leadWithAlpha` - Force string to start with a leading alpha char

### Basic Use

The default generated token will be a 32 char alphanumeric token string eg. `FjFoaNmxGAZFP4FaMoPG1K2vYuw3bGFG`

```ts
import { generateToken } from '@basementscripts/token-generator'

...

const token = generateToken()

```

### Generate 6 Digit Token

Generates a 6 digit token string eg. `085293`

```ts
import { generateToken, Chars } from '@basementscripts/token-generator'

...

const token = generateToken({ type: Chars.Numeric, length: 6 })

```
