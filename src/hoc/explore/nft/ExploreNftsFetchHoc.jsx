import React, {useEffect} from 'react';
import ExploreNftsPage from "../../../components/pages/explore/nft/ExploreNftPage";

const ExploreNftsFetchHoc = ({nfts, fetching, clearExploreNftState, fetchMarketNfts, accountId}) => {

    useEffect(() => {
        fetchMarketNfts(accountId)
        return () => clearExploreNftState()
    }, [])

    return <ExploreNftsPage nfts={nfts} fetching={fetching}/>
};

export default ExploreNftsFetchHoc;