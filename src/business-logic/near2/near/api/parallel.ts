export enum PromiseStatus {
    Fulfilled,
    Rejected
}

export interface PromiseSuccess<T> {
    status: PromiseStatus.Fulfilled,
    value: T
}

export interface PromiseFailure {
    status: PromiseStatus.Rejected,
    value: any
}

export type PromiseExecution<T>
    = PromiseSuccess<T>
    | PromiseFailure


export function parallelPromises<T>(promises: Promise<T>[]): Promise<PromiseExecution<T>[]> {
    let wrappedPromises: Promise<PromiseExecution<T>>[] = promises
        .map(p => p.then(
                value => ({status: PromiseStatus.Fulfilled, value: value}),
                error => ({status: PromiseStatus.Rejected, value: error})
            )
        )
    return Promise.all(wrappedPromises);
}