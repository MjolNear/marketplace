import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import {fetchCollectionNfts} from "../../../state/preview/collection/thunk";
import previewCollectionPage from "./PreviewCollectionPage";
import {previewCollectionSlice} from "../../../state/preview/collection/slice";

const CollectionNftList = () => {


    const {nfts, fetching, hasMore, from, limit} = useAppSelector(state => state.preview.collection.nftsState)
    const collectionId = useAppSelector(state => state.preview.collection.collection?.collection_id)

    if (!collectionId) {
        return <NotFoundPage/>
    }

    return (
        <PaginationCardList nfts={nfts}
                            fetching={fetching}
                            hasMore={hasMore}
                            from={from}
                            limit={limit}
                            fetcher={
                                (from: number, limit: number) => fetchCollectionNfts(collectionId, from, limit)
                            }
                            reset={previewCollectionSlice.actions.reset}
        />
    );
};

export default CollectionNftList;