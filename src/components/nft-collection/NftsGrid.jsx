import SmallNftLoader from "../ui/loaders/SmallNftLoader";
import NftCollectionContainer from "./NftCollectionContainer";
import NftItem from "../nft-item/NftItem";
import React from "react";

const NftsGrid = ({nfts, fetching}) => {
    const loaders = Array(12)
        .fill(0)
        .map((i, idx) =>
            <SmallNftLoader key={idx} width={300} height={418}/>
        )

    return (
        <div className="p-5 md:p-10">
            <NftCollectionContainer>
                {fetching
                    ? loaders
                    : nfts.map(nft =>
                        <NftItem key={nft.tokenId + nft.contractId} nft={nft}/>
                    )
                }
            </NftCollectionContainer>
        </div>
    );
};

export default NftsGrid;
