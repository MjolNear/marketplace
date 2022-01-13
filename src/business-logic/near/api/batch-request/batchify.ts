export interface BatchResult<R> {
    values: R[],
    errors: any[]
}

/**
 * Batch async requests, throttled with a delay
 * to avoid hammering the network
 *
 * @param batch list of elements to process
 * @param {Function} request (returns Promise)
 */
export function batchRequest<T, R = any>(batch: T[], request: ((data: T) => Promise<R>)) {
    return new Promise<BatchResult<R>>(async resolve => {
            let values = new Array<R>()
            let errors = new Array<any>()

            const results = await Promise.all(
                batch.map(data =>
                    request(data)
                        .then(value => ({value}))
                        .catch(error => ({error}))
                )
            )

            results.forEach(result => 'error' in result
                ? errors.push(result.error)
                : values.push(result.value)
            )

            resolve({values, errors})
        }
    )
}