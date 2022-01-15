import CardLoader from "../Card/CardLoader";
import NftCollectionContainer from "./NftCollectionContainer";
import Card from "../Card/Card";
import React from "react";

const NftsGrid = ({nfts, fetching}) => {
    const loaders = Array(12)
        .fill(0)
        .map((i, idx) =>
            <CardLoader key={idx}/>
        )

    return (
        <div className="p-5">
            <NftCollectionContainer>
                {fetching
                    ? loaders
                    : nfts.map(nft =>
                        <Card key={nft.tokenId + nft.contractId} nft={nft}/>
                    )
                }
            </NftCollectionContainer>
        </div>
    );
};

export default NftsGrid;
