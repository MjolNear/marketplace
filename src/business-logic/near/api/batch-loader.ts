export interface BatchLoader<T> {
    limit: number
    hasNext: boolean
    fetchNext: (...args: any[]) => Array<T>
}

export interface Batchify {

}
