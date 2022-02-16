import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardListLoader from "./CardListLoader";
import CardGrid from "./CardGrid";
import {useQuery} from "@apollo/client";
import {fetchTokens} from "../../business-logic/near/api/graphql/tokens";
import {Nft} from "../../business-logic/models/nft";

const PaginationIndexerCardList = () => {
    const limit = 12
    const {query, variables} = fetchTokens(limit)

    const {loading, data, error, fetchMore} = useQuery(query, {
        variables
    })

    const nfts: Nft[] = data
        ? data.tokens
        : []

    console.log(data)

    return (
        <InfiniteScroll
            next={() => 1}
            scrollThreshold="100px"
            hasMore={true}
            className={"py-5 " + (nfts.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : "")}
            loader={<CardListLoader/>}
            dataLength={nfts.length}
        >
            <CardGrid nfts={nfts} fetching={loading}/>
        </InfiniteScroll>
    );
};

export default PaginationIndexerCardList;