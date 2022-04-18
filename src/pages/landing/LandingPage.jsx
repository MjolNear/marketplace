import React from 'react';
import GreetingBlock from "./GreetingBlock";
import nftsImg from "../../resources/nfts-landing.png";
import CardGrid from "../../components/CardList/CardGrid";
import {convertToMarketToken} from "../../graphql/types";
import {useNewMarketTokensQuery} from "../../graphql/generated/market-graphql";

const LandingPage = () => {
    const {data, loading} = useNewMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
    })

    const nfts = data?.tokens.map(convertToMarketToken) || [];

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
                          loading={loading}
                />
            </div>
        </div>
    )
};

export default LandingPage;