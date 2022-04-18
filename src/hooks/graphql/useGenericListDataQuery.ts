import {QueryHookOptions, QueryResult} from "@apollo/client/react/types/types";
import {useCallback, useEffect, useMemo, useState} from "react";
import {ApolloQueryResult} from "@apollo/client";

export const useGenericListDataQuery = <R, TData, TVariables extends { limit: number }>(
    queryHook: (options: QueryHookOptions<TData, TVariables>) => QueryResult<TData, TVariables>,
    mapper: (data?: TData) => R[],
    options: QueryHookOptions<TData, TVariables>,
) => {

    const {data, error, loading, fetchMore} = queryHook(options)
    const listData = useMemo(() => mapper(data), [data, mapper])
    const dataLength = useMemo(() => listData.length, [listData.length])
    const limit = useMemo(() => options.variables?.limit || 1, [options.variables])

    const [hasMore, setHasMore] = useState(dataLength % limit === 0 && dataLength !== 0)
    const [loadingMore, setLoadingMore] = useState(true)

    useEffect(() => {
        setHasMore(dataLength % limit === 0 && dataLength !== 0)
    }, [dataLength, limit])

    useEffect(() => {
        if (error) {
            setHasMore(false)
            setLoadingMore(false)
        }
    }, [error])


    const onLoadMore = useCallback(() => {
        setLoadingMore(true)
        fetchMore({
                variables: {
                    offset: dataLength
                }
            }
        ).then(response => {
                const typedResponse = (response as ApolloQueryResult<TData>)
                setLoadingMore(false)
                setHasMore(mapper(typedResponse.data).length === limit)
            }
        )
    }, [dataLength, fetchMore, mapper, limit])

    return {
        data: listData,
        loading: loading || (loadingMore && dataLength !== 0),
        hasMore: hasMore || (loading && dataLength % limit === 0),
        onLoadMore
    }
}
