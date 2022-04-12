import React from 'react';
import {GridToken} from "../../business-logic/types/nft";
import {FixedSizeGrid as Grid} from 'react-window';


interface PaginationCardListProps {
    tokens: GridToken[],
    hasMore: boolean,
    loading: boolean,
    onLoadMore: () => any,
    isCollectionNFTs?: boolean
}


const Cell: React.FC<{ columnIndex: number, rowIndex: number, style: React.CSSProperties | undefined }> = ({
    columnIndex,
    rowIndex,
    style
}) => (
    <div style={style} className="text-4xl font-archivo">
        Item {rowIndex},{columnIndex}
    </div>
);

const Example = () => (
    <Grid
        style={{
            boxSizing: "border-box",
            height: "auto",
            overflowX: "hidden",
            overflowY: "auto",
            display: "block"
        }}
        columnCount={3}
        columnWidth={300}
        height={0}
        rowCount={1000}
        rowHeight={200}
        width={1000}
    >
        {props => <Cell {...props}/>}
    </Grid>
);

const PaginationCardList: React.FC<PaginationCardListProps> = ({
    tokens,
    hasMore,
    loading,
    onLoadMore,
    isCollectionNFTs = false,
}) => {
    return (
        // <InfiniteScroll
        //     next={onLoadMore}
        //     scrollThreshold="100px"
        //     hasMore={hasMore}
        //     className={"py-5 " + (tokens.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : "")}
        //     loader={<></>}
        //     dataLength={tokens.length}
        // >
        // <CardGrid tokens={tokens} loading={loading} isCollectionNFTs={isCollectionNFTs}/>
        <Example/>
    );
};

export default PaginationCardList;