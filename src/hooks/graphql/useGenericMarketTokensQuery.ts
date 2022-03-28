import {QueryHookOptions, QueryResult} from "@apollo/client/react/types/types";
import {GridToken} from "../../business-logic/models/nft";
import {useCallback, useEffect, useMemo, useState} from "react";
import {ApolloQueryResult} from "@apollo/client";


export const useGenericMarketTokensQuery = <TData, TVariables extends { limit: number }>(
    queryHook: (options: QueryHookOptions<TData, TVariables>) => QueryResult<TData, TVariables>,
    tokensMapper: (data?: TData) => GridToken[],
    options: QueryHookOptions<TData, TVariables>,
) => {

    const {data, error, loading, fetchMore} = queryHook(options)
    const tokens = useMemo(() => tokensMapper(data), [data, tokensMapper])

    const [fetchingStatus, setFetchingStatus] = useState({
        loading: true,
        hasMore: true
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
    }, [loading, error, tokens, options?.variables?.limit])


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
    }, [tokens, fetchMore, tokensMapper, options?.variables?.limit])

    return {tokens, onLoadMore, ...fetchingStatus}
}
