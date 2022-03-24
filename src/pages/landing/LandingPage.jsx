import React from 'react';
import GreetingBlock from "./GreetingBlock";
import nftsImg from "../../resources/nfts-landing.png";
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
            limit: 4,
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
            <div className="md:col-span-2 col-span-4 mt-12 place-self-start">
                <div className="font-archivo font-bold text-2xl text-blue-500 text-center mb-5">
                    Latest listing
                </div>
                <CardGrid tokens={nfts}
                          fetching={loading}
                />
            </div>
        </div>
    )
};

export default LandingPage;