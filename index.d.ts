import { Highlighter, HighlighterOptions } from 'shiki';

declare type ShikiLanguageType = Parameters<Highlighter['codeToThemedTokens']>['1'];
declare type ShikiThemeType = Parameters<Highlighter['codeToThemedTokens']>['2'];

/**
 * Global Configuration for shiki highlighter
 * the configs of shiki will be merged to the global shiki config
 * @export
 * @param {Partial<HighlighterOptions>} [config] ShikiHighlighterConfig
 */
declare function configureShiki(config?: Partial<HighlighterOptions>): void;

/**
 * Core Highlight functions
 * @export
 * @param {string} codeText The content to be highlighted
 * @param {ShikiLanguageType} [languageType='javascript'] The content languageType, default to javascript
 * @param {ShikiThemeType} [themeType='monokai'] The content themtType, default set to 'monokai'
 * @returns {string} The rendered text
 */
declare function highlight(codeText: string, languageType?: ShikiLanguageType, themeType?: ShikiThemeType): Promise<string>;

export { configureShiki, highlight };
