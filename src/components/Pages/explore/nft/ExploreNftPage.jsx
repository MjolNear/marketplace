import React from 'react';
import NftFilters from "./NftFilters";
import CardGrid from "../../../CardList/CardGrid";
import CardList from "../../../CardList/CardList";

const ExploreNftPage = ({nfts, hasMore, fetchNext}) => {
    return (
        <div className="space-y-6">
            <NftFilters/>
            <CardList tokens={nfts} hasMore={true}/>
        </div>
    );
};

export default ExploreNftPage;