import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import {fetchMarketNfts} from "../../state/explore/nfts/thunk";
import {exploreNftsSlice} from "../../state/explore/nfts/slice";
import PaginationCardList from "./PaginationCardList";

const ExploreCardList: React.FC = () => {

    const {nfts, hasMore, fetching, from, limit} = useAppSelector(state => state.explore.nfts)

    return <PaginationCardList nfts={nfts}
                               hasMore={hasMore}
                               fetching={fetching}
                               from={from}
                               limit={limit}
                               fetcher={fetchMarketNfts}
                               reset={exploreNftsSlice.actions.reset}
    />
};

export default ExploreCardList;