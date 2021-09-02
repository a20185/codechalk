import { HighlighterOptions } from 'shiki'
import merge from 'merge'

let shikiConfig = {
    langs: ['javascript', 'css', 'html', 'vue-html', 'typescript', 'jsx', 'tsx'],
    themes: ['monokai', 'one-dark-pro', 'material-darker']
} as HighlighterOptions

/** Global getter for highlighter configurations */
export function getShikiConfig(): HighlighterOptions {
    return shikiConfig
}

/**
 * Global Configuration for shiki highlighter
 * the configs of shiki will be merged to the global shiki config
 * @export
 * @param {Partial<HighlighterOptions>} [config] ShikiHighlighterConfig
 */
export function configureShiki(config?: Partial<HighlighterOptions>) {
    const targetConfig = config ?? {}
    shikiConfig = merge(shikiConfig, targetConfig)
}