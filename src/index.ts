import { renderCodeTokens } from "./lib/renderer"
import { generateCodeTokens, ShikiLanguageType, ShikiThemeType } from "./lib/tokenizer"

/**
 * Core Highlight functions
 * @export
 * @param {string} codeText The content to be highlighted
 * @param {ShikiLanguageType} [languageType='javascript'] The content languageType, default to javascript
 * @param {ShikiThemeType} [themeType='monokai'] The content themtType, default set to 'monokai'
 * @returns {string} The rendered text
 */
export async function highlight(codeText: string, languageType: ShikiLanguageType = 'javascript', themeType: ShikiThemeType = 'monokai') {
    const codeTokens = await generateCodeTokens(codeText, languageType, themeType)
    if (!codeTokens) return codeText
    const renderedResult = await renderCodeTokens(codeTokens)
    return renderedResult
}

export { configureShiki } from './lib/config'
