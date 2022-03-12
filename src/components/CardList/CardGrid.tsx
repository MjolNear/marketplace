import Card from "../Card/Card";
import React from "react";
import {GridToken} from "../../business-logic/models/nft";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import {ScrollPosition} from "react-lazy-load-image-component";
import {buildUID} from "../../business-logic/near/api/utils";
import EmptyCardList from "./EmptyCardList";

interface PropTypes {
    tokens: GridToken[],
    fetching: boolean,
    scrollPosition?: ScrollPosition,
    isCollectionNFTs?: boolean
}

/**
 * Returns NFT items grid component
 *
 * @param tokens array of {@link Token} items
 * @param fetching boolean value which determines fetching status
 * @param isCollectionNfts boolean value than changes the empty card animation footer
 * @param scrollPosition
 */
const CardGrid: React.FC<PropTypes> = ({
    tokens,
    fetching,
    scrollPosition,
    isCollectionNFTs = false
}) => {
    return (
        <>
            {tokens.length === 0 && !fetching
                ? isCollectionNFTs
                    ? <EmptyCardList mainDescription="No items on sale"
                                     //footerDescription="You can Mint your own NFTs into collection via"
                                     //footerLink="/create-token"
                                     //footerLinkName="creation"
                    />
                    : <EmptyCardList/>
                : <CardsGridContainer>
                    {tokens.map(token => {
                            const uid = buildUID(token.contractId, token.tokenId)
                            return <Card key={uid}
                                         tokenId={token.tokenId}
                                         contractId={token.contractId}
                                         title={token.title}
                                         media={token.media}
                                         price={token.price}
                                         mintedSiteLink={token.mintedSiteLink}
                                         mintedSiteName={token.mintedSiteName}
                                         verification={token.verification}
                            />
                        }
                    )}
                </CardsGridContainer>
            }
        </>
    )
};

export default CardGrid;
