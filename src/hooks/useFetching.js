export const useFetching = (setFetching, callback) => {
    setFetching(true)
    return callback(() => setFetching(false))
}