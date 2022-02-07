import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import {fetchCollectionNfts} from "../../../state/preview/collection/thunk";
import {previewCollectionSlice} from "../../../state/preview/collection/slice";

const CollectionNftList = () => {


    const {nfts, fetching, hasMore, from, limit, total} = useAppSelector(state => state.preview.collection.nftsState)
    const collection = useAppSelector(state => state.preview.collection.collection)

    if (!collection) {
        return <NotFoundPage/>
    }

    return (
        <PaginationCardList nfts={nfts}
                            fetching={fetching}
                            hasMore={hasMore}
                            from={from}
                            limit={limit}
                            fetcher={
                                (from: number, limit: number) => fetchCollectionNfts(
                                    collection.collection_id,
                                    collection.collection_contract,
                                    from,
                                    limit,
                                    total
                                )
                            }
                            reset={previewCollectionSlice.actions.reset}
        />
    );
};

export default CollectionNftList;