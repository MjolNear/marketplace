import React, {memo} from "react";
import {GridToken} from "../../business-logic/types/nft";
import EmptyCardList from "./EmptyCardList";
import VirtualGrid from "../Common/Grid/VirtualGrid";
import Card from "../Card/Card";
import {buildUID} from "../../near/api/utils";


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

    const columns = 3
    const rows = Math.ceil(tokens.length / columns)

    console.log(columns, rows)

    console.log(tokens)

    return (
        <>
            {/*{tokens.length === 0 && !loading*/}
            {/*    ? isCollectionNFTs*/}
            {/*        ? <EmptyCardList mainDescription="No items for this collection on sale"/>*/}
            {/*        : <EmptyCardList/>*/}
            {/*    :*/}
                <VirtualGrid columnWidth={300}
                             columnCount={3}
                             rowHeight={400}
                             rowCount={1000}
                             cell={props => {
                                 const token = tokens[props.rowIndex * rows + props.columnIndex]
                                 const uid = buildUID(token.contractId, token.tokenId)
                                 return <div>"Amazing"</div>
                             }}/>
            {/*}*/}
        </>
    )
};

export default memo(CardGrid);
