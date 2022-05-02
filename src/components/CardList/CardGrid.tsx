import Card from "../Card/Card";
import React, {memo} from "react";
import {GridToken} from "../../@types/Token";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import {buildUID} from "../../near/api/utils";
import EmptyCardList from "./EmptyCardList";

interface TGridProps {
    tokens: GridToken[],
    loading: boolean,
    isCollectionNFTs?: boolean
}

/**
 * Returns NFT items grid component
 *
 * @param tokens array of {@link Token} items
 * @param loading boolean value which determines fetching status
 * @param isCollectionNfts boolean value than changes the empty card animation footer
 */
const CardGrid: React.FC<TGridProps> = ({
    tokens,
    loading,
    isCollectionNFTs = false
}) => {
    return (
        <>
            {tokens.length === 0 && !loading
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
                                         extra={token.extra}
                                         contractName={token.contractName}
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