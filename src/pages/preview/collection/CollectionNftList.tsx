import React, {useEffect} from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchCollectionNfts} from "../../../state/preview/collection/thunk";
import {collectionTokensSlice} from "../../../state/preview/collection/slice";
import {CollectionId, ContractId} from "../../../business-logic/types/aliases";
import {getCollectionTokens} from "../../../state/store";

interface TCollectionNftListProps {
    contractId: ContractId,
    collectionId: CollectionId,
    total: number
}

const CollectionNftList: React.FC<TCollectionNftListProps> = ({
    contractId,
    collectionId,
    total
}) => {

    const {tokens, fetching, hasMore, from, limit} = useAppSelector(getCollectionTokens)
    const dispatch = useAppDispatch()

    const fetchNextTokens = (from: number, limit: number) => {
        if (hasMore && !fetching) {
            return dispatch(
                fetchCollectionNfts(
                    contractId,
                    collectionId,
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
            dispatch(collectionTokensSlice.actions.reset())
        }
    }, [dispatch])

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