import Card from "../Card/Card";
import React, {memo} from "react";
import {GridToken} from "../../business-logic/models/nft";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import {buildUID} from "../../business-logic/near/api/utils";
import EmptyCardList from "./EmptyCardList";

interface TGridProps {
    tokens: GridToken[],
    fetching: boolean,
    isCollectionNFTs?: boolean
}

/**
 * Returns NFT items grid component
 *
 * @param tokens array of {@link Token} items
 * @param fetching boolean value which determines fetching status
 * @param isCollectionNfts boolean value than changes the empty card animation footer
 */
const CardGrid: React.FC<TGridProps> = ({
    tokens,
    fetching,
    isCollectionNFTs = false
}) => {
    return (
        <>
            {tokens.length === 0 && !fetching
                ? isCollectionNFTs
                    ? <EmptyCardList mainDescription="No items for this collection on sale"/>
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
                                         collectionMeta={token.collection}
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

export default memo(CardGrid);
