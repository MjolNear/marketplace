import React from 'react';
import GreetingBlock from "./GreetingBlock";
import nftsImg from "../../resources/nfts_main2.png";
import CardGrid from "../../components/CardList/CardGrid";
import DarkBlueTitle from "../../components/Common/Text/DarkBlueTitle";
import {convertToMarketToken} from "../../graphql/utils";
import {useMarketTokensQuery} from "../../graphql/generated/graphql";
import {tokenSortOptions, TokenSortName} from "../explore/nft/ExploreNftsPage";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../utils/string";

const LandingPage = () => {
    const initialSort = tokenSortOptions[TokenSortName.RecentlyAdded]
    const {data, loading} = useMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            offset: 0,
            limit: 12,
            orderBy: initialSort.by,
            orderDirection: initialSort.direction,
            priceFrom: MIN_ITEM_YOCTO_PRICE,
            priceTo: MAX_ITEM_YOCTO_PRICE
        }
    })

    const nfts = data?.marketTokens.map(convertToMarketToken) || [];
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-7xl mx-auto py-8 px-8">
                <div className="grid-cols-4 grid">
                    <div className="md:col-span-2 col-span-4 place-self-center">
                        <GreetingBlock/>
                    </div>
                    <div className="col-span-2 hidden md:block">
                        <img src={nftsImg} alt="img"/>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 col-span-4 md:py-40 py-20 place-self-start">
                <DarkBlueTitle title="Latest listings"/>
                <div className="py-5">
                    <CardGrid tokens={nfts}
                              fetching={loading}
                    />
                </div>
            </div>
            {/*<div className="col-span-2 py-40 place-self-start">*/}
            {/*    <DarkBlueTitle title="Top collections"/>*/}
            {/*</div>*/}
        </div>
    )
};

export default LandingPage;