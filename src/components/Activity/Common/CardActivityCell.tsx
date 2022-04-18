import React from 'react';
import classNames from "../../../utils/css-utils";

export enum ActivityCellType {
    Event,
    Price,
    Basic
}

interface TActivityCellProps {
    type: ActivityCellType,
    paddingY?: string
    children: React.ReactNode
}


const CardActivityCell: React.FC<TActivityCellProps> = ({
    type,
    children,
    paddingY = 'py-[16px]'
}) => {
    return (
        <div className={
            classNames("pl-[16px] pr-[4px] flex items-center grow shrink-0 overflow-x-auto",
                paddingY,
                type === ActivityCellType.Price ? "basis-[140px] md:basis-[100px] 2xl:basis-[15px]" : "",
                type === ActivityCellType.Event ? "basis-[130px] md:basis-[100px] 2xl:basis-[30px]" : "",
                type === ActivityCellType.Basic ? "basis-[150px] md:basis-[100px]" : ""
            )
        }>
            <div className="inline-flex w-full items-center gap-2">
                {children}
            </div>
        </div>
    );
};

export default CardActivityCell;