import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeGrid as Grid, GridChildComponentProps} from "react-window";

interface VirtualGridProps {
    columnWidth: number
    columnCount: number
    rowHeight: number
    rowCount: number
    cell: (props: React.PropsWithChildren<GridChildComponentProps<any>>) => React.ReactElement
}

const VirtualGrid: React.FC<VirtualGridProps> = ({
    columnWidth,
    columnCount,
    rowHeight,
    rowCount,
    cell
}) => {
    return (
        <AutoSizer>
            {({width, height}) =>
                <Grid width={width}
                      height={height}
                      columnWidth={columnWidth}
                      rowHeight={rowHeight}
                      columnCount={columnCount}
                      rowCount={rowCount}
                      // className="justify-center gap-4 md:gap-5 2xl:gap-8 px-8 md:px-[20px]"
                >
                    {props => <div>{props.columnIndex}, {props.rowIndex}</div>}
                </Grid>
            }
        </AutoSizer>
    );
};

export default VirtualGrid;