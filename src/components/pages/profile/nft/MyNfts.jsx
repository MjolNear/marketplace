import React from 'react';
import NftCollectionContainer from "../../../nft-collection/NftCollectionContainer";
import NftItem from "../../../nft-item/NftItem";
import SmallNftLoader from "../../../ui/loaders/SmallNftLoader";

const MyNfts = ({nfts, fetching}) => {

    const nftItems = nfts.map(nft =>
        <NftItem key={nft.getKey()} nft={nft}/>
    )

    const loaders = Array(12)
        .fill(0)
        .map((i, idx) =>
            <SmallNftLoader key={idx} width={295} height={455}/>
        )

    return (
        <div className="bg-transparent m-10">
            <NftCollectionContainer>
                {fetching
                    ? loaders
                    : nftItems.length === 0
                        ? <div>No nfts found</div>
                        : nftItems
                }
            </NftCollectionContainer>
        </div>
    );
};

export default MyNfts;