import Card from "../Card/Card";
import React from "react";
import {Nft} from "../../business-logic/models/nft";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import {ScrollPosition} from "react-lazy-load-image-component";
import {buildUID} from "../../business-logic/near/api/utils";
import EmptyCardList from "./EmptyCardList";

interface PropTypes {
    nfts: Nft[],
    fetching: boolean,
    scrollPosition?: ScrollPosition,
    isCollectionNFTs?: boolean
}

/**
 * Returns NFT items grid component
 *
 * @param nfts array of {@link Nft} items
 * @param fetching boolean value which determines fetching status
 * @param collectionNfts boolean value than changes the empty card animation footer
 * @param scrollPosition
 */
const CardGrid: React.FC<PropTypes> = ({
    nfts,
    fetching,
    scrollPosition,
    isCollectionNFTs = false
}) => {
    return (
        <>
            {nfts.length === 0 && !fetching
                ? isCollectionNFTs
                    ? <EmptyCardList footerDescription="You can Mint your ow NFTs into collection via"
                                     footerLink="/create-nft"
                                     footerLinkName="creation"
                    />
                    : <EmptyCardList/>
                : <CardsGridContainer>
                    {nfts.map(nft => {
                            const uid = buildUID(nft.contractId, nft.tokenId)
                            return <Card key={uid} nft={nft} scrollPosition={scrollPosition}/>
                        }
                    )}
                </CardsGridContainer>
            }
        </>
    )
};

export default CardGrid;
