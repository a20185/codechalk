export type ExtractPromise<T> = T extends Promise<infer R> ? R : T
export type ExcludeUndefined<T> = T extends (infer R | undefined) ? ExcludeUndefined<R> : T
export function nonUndefined<T>(param: T | undefined): T {
    return param as T
}