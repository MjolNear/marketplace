import React from 'react';
import {CardSize, useCardSize} from "../../context/CardSizeContext";
import classNames from "../../utils/css-utils";

interface TCardLoaderProps {
    size?: number,
    className?: string
}

const CardLoader = React.memo<TCardLoaderProps>(({size = 300, className}) => {
    const gradient = (direction: string) =>
        `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`

    const cardSize = useCardSize()

    return (
        <div className={className}>
            <div className="flex flex-col ring-1 rounded-xl ring-gray-200 overflow-hidden mjol-pulse-animation w-full
                            cursor-pointer transform hover:shadow-mjol-gray-xs hover:ring-inset hover:-translate-y-[1px]"
            >
                {/* Image block */}
                <div style={{
                    width: cardSize === CardSize.Big ? 300 : 200,
                    aspectRatio: "1/1",
                    background: gradient('right')
                }}/>

                <div className={classNames(
                    "px-2 xxs:px-5 mt-0.5",
                    cardSize === CardSize.Big ? "py-2 space-y-0.5" : "space-y-[0.5px]"
                )}>
                    {/* Title block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: cardSize === CardSize.Big ? "18px" : "13px"
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

                    {/* Subtitle block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: cardSize === CardSize.Big ? "15px" : "10px"
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

                {/* Price block */}
                <div className={classNames(
                    "w-full px-5",
                    cardSize === CardSize.Big ? "mt-4 pt-3 pb-1" : "py-1 mt-[0.5]"
                )}
                     style={{
                         background: "linear-gradient(rgba(229, 232, 235, 0.392) 0%, rgb(255, 255, 255) 20%)"
                     }}>
                    <div className="inline-flex w-full justify-between rounded-lg overflow-hidden"
                         style={{
                             height: cardSize === CardSize.Big ? '17px' : "12px"
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
});

export default CardLoader;