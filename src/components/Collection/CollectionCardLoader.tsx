import React from 'react';
import {CardSize, useCardSize} from "../../context/CardSizeContext";
import classNames from "../../utils/css-utils";

interface TCollectionCardLoaderProps {
    size?: number,
    className?: string
}

const CollectionCardLoader: React.FC<TCollectionCardLoaderProps> = ({
    size = 300,
    className
}) => {
    const gradient = (direction: string) =>
        `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`

    const cardSize = useCardSize()

    return (
        <div className={className}>
            <div className="flex flex-col ring-1 rounded-xl ring-gray-200 overflow-hidden mjol-pulse-animation cursor-pointer
                            w-full transform hover:shadow-mjol-gray-xs hover:ring-inset"
            >
                {/* Image block */}
                <div style={{
                    width: cardSize === CardSize.Big ? 300 : 200,
                    aspectRatio: "1/1",
                    background: gradient('right')
                }}/>

                <div className={classNames(
                    "py-2 px-2 xxs:px-5",
                    cardSize === CardSize.Big ? "space-y-4 mt-2" : "mt-1 space-y-2"
                )}>
                    {/* Title block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: cardSize === CardSize.Big ? '24px' : "19px"
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "35%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "20%"
                        }}/>
                    </div>

                    {/* Description block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: cardSize === CardSize.Big ? "18px" : "14px"
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "50%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "25%"
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCardLoader;