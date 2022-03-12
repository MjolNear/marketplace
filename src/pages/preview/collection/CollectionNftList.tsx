import React, {useEffect} from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import {fetchCollectionNfts} from "../../../state/preview/collection/thunk";
import {previewCollectionSlice} from "../../../state/preview/collection/slice";

const CollectionNftList = () => {
    const {tokens, fetching, hasMore, from, limit, total} = useAppSelector(state => state.preview.collection.nftsState)
    const collection = useAppSelector(state => state.preview.collection.collection)
    const dispatch = useAppDispatch()

    const fetchNextTokens = (from: number, limit: number) => {
        if (hasMore && !fetching && collection) {
            return dispatch(
                fetchCollectionNfts(
                    collection.collection_id,
                    collection.collection_contract,
                    from,
                    limit,
                    total
                )
            )
        }
    }

    useEffect(() => {
        fetchNextTokens(from, limit)
        return () => {
            dispatch(previewCollectionSlice.actions.resetLimits())
        }
    }, [])

    if (!collection) {
        return <NotFoundPage/>
    }

    return (
        <PaginationCardList tokens={tokens}
                            loading={fetching}
                            hasMore={hasMore}
                            isCollectionNFTs={true}
                            onLoadMore={() => fetchNextTokens(from, limit)}
        />
    );
};

export default CollectionNftList;