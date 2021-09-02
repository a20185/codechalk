import { IThemedToken } from 'shiki'
import Chalk from 'chalk'
import { ShikiThemeTokenFontStyleTypes } from './enums'

function defaultRenderer(content: string): string {
    return content
}

function createColorizer(token: IThemedToken): ((params: any) => string) {
    return token.color
        ? Chalk.hex(token.color)
        : defaultRenderer
}

function createFontStyler(token: IThemedToken): ((params: any) => string) {
    switch (token.fontStyle) {
        case ShikiThemeTokenFontStyleTypes.Bold:
            return Chalk.bold
        case ShikiThemeTokenFontStyleTypes.Italic:
            return Chalk.italic
        case ShikiThemeTokenFontStyleTypes.Underline:
            return Chalk.underline
        default:
            return defaultRenderer
    }
}

function renderSingleToken (token: IThemedToken) {
    const fontStyler = createFontStyler(token)
    const colorizer = createColorizer(token)
    return fontStyler(colorizer(token.content))
}

export function renderCodeTokens(tokens: IThemedToken[][]) {
    return tokens.map(lineTokens => {
        return lineTokens.map(scopedToken => renderSingleToken(scopedToken))
            .join('') /** Tokens joined by spacings */
    }).join('\n') /** lines joined by newLines */
}