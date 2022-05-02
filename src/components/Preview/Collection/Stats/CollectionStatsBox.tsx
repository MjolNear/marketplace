import React, {memo} from 'react';
import CollectionStatBox from "./CollectionStatBox";
import {formatNearAmount} from "near-api-js/lib/utils/format";
import {Optional} from "../../../../@types/Aliases";
import RectLoader from "../../../../@ui/Loaders/RectLoader";

interface CollectionStatsProps {
    loading: boolean
    floor?: Optional<string>
    highestSale?: Optional<string>
    volume: string
    average: string
    sales: string
    supply?: number
}

const CollectionStatsBox: React.FC<CollectionStatsProps> = ({
    loading,
    floor,
    highestSale,
    volume,
    average,
    sales,
    supply
}) => {


    const floorPrice = formatNearAmount(floor || "", 2)
    const volumeTraded = formatNearAmount(volume || "", 2)
    const averagePrice = formatNearAmount(average || "", 2)
    const highestSalePrice = formatNearAmount(highestSale || "", 2)

    return (
        <>
            {loading
                ?
                <div className="h-[150px] rounded-lg overflow-hidden">
                    <RectLoader/>
                </div>
                :
                <div className="max-md:w-full max-w-[550px] rounded-lg p-[1px] bg-blue-200">
                    <div className="rounded-lg overflow-hidden grid grid-cols-3 gap-[1px]">
                        <CollectionStatBox name="Items"
                                           value={supply || "---"}
                                           dataFor="collectionStatsItemsTooltipId"
                                           dataTip="Total number of NFTs that has been minted"
                                           place="top"
                        />
                        <CollectionStatBox name="Sales"
                                           value={sales || "0"}
                                           dataFor="collectionStatsSalesTooltipId"
                                           dataTip="Number of sales on MjolNear marketplace"
                                           place="top"
                        />
                        <CollectionStatBox name="Market cap"
                                           value={volumeTraded}
                                           priceValue={true}
                                           dataFor="collectionStatsMarketCapTooltipId"
                                           dataTip="Market cap for all time"
                                           place="top"
                        />
                        <CollectionStatBox name="Highest sale"
                                           value={highestSale ? highestSalePrice : "---"}
                                           priceValue={true}
                                           dataFor="collectionStatsHighestSaleTooltipId"
                                           dataTip="Highest sale price for all time"
                                           place="bottom"
                        />
                        <CollectionStatBox name="Floor price"
                                           value={floor ? floorPrice : "---"}
                                           priceValue={true}
                                           dataFor="collectionStatsFloorPriceTooltipId"
                                           dataTip="Current cheapest price"
                                           place="bottom"
                        />
                        <CollectionStatBox name="Average price"
                                           value={averagePrice}
                                           priceValue={true}
                                           dataFor="collectionStatsAverageTooltipId"
                                           dataTip="Average price for all time"
                                           place="bottom"
                        />
                    </div>
                </div>
            }
        </>
    );
};

export default memo(CollectionStatsBox);