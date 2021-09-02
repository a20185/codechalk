import type { Highlighter, Lang, Theme } from 'shiki'
import { getShikiConfig } from './config'
import { nonUndefined } from './util'
const shiki = require('shiki')
export type ShikiLanguageType = Parameters<Highlighter['codeToThemedTokens']>['1']
export type ShikiThemeType = Parameters<Highlighter['codeToThemedTokens']>['2']

export async function generateCodeTokens (codeText: string, language: ShikiLanguageType, theme: ShikiThemeType) {
    if (!codeText) return null
    const shikiConfig = getShikiConfig()
    const highlighter = await shiki.getHighlighter(shikiConfig)
    /** If language and theme not loaded, just load them */
    const priorLanguages = highlighter.getLoadedLanguages()
    const priorThemes = highlighter.getLoadedThemes()
    if (priorLanguages.indexOf(nonUndefined(language) as Lang) === -1) {
        await highlighter.loadLanguage(nonUndefined(language) as Lang)
    }
    if (priorThemes.indexOf(nonUndefined(theme) as Theme) === -1) {
        await highlighter.loadTheme(nonUndefined(theme) as Theme)
    }
    const codeTokens = highlighter.codeToThemedTokens(codeText, language, theme)
    return codeTokens
}