import {QueryHookOptions, QueryResult} from "@apollo/client/react/types/types";
import {GridToken} from "../../business-logic/models/nft";
import {useCallback, useEffect, useMemo, useState} from "react";
import {ApolloQueryResult} from "@apollo/client";


export const useGenericMarketTokensQuery = <TData, TVariables extends { limit: number, offset: number }>(
    queryHook: (options: QueryHookOptions<TData, TVariables>) => QueryResult<TData, TVariables>,
    tokensMapper: (data?: TData) => GridToken[],
    options: QueryHookOptions<TData, TVariables>,
) => {

    const {data, loading, fetchMore, error} = queryHook(options)
    const tokens = useMemo(() => tokensMapper(data), [data])

    const [fetchingStatus, setFetchingStatus] = useState({
        loading: tokens.length === 0,
        hasMore: tokens.length % (options?.variables?.limit || 1) === 0 && tokens.length !== 0
    })

    useEffect(() => {
        // console.log(`RUN EFFECT: loading = ${loading} length = ${tokens.length} | my: ${fetchingStatus.loading} ${fetchingStatus.hasMore}`)
        if (error) {
            setFetchingStatus({
                loading: false,
                hasMore: false
            })
        }
        if (loading) {
            setFetchingStatus({
                hasMore: true,
                loading: true
            })
        } else {
            setFetchingStatus(({
                loading: false,
                hasMore: (tokens.length % (options?.variables?.limit || 1) === 0 && tokens.length !== 0)
            }))
        }
    }, [loading, error, tokens])


    const onLoadMore = useCallback(() => {
        setFetchingStatus({loading: true, hasMore: true})
        fetchMore({
            variables: {
                offset: tokens.length
            }
        }).then(response => {
                const typedResponse = (response as ApolloQueryResult<TData>)
                setFetchingStatus({
                    loading: false,
                    hasMore: tokensMapper(typedResponse.data).length === options?.variables?.limit
                })
            }
        )
    }, [tokens])

    return {tokens, onLoadMore, ...fetchingStatus}
}
