import React, {memo} from 'react';
import StatBox from "./StatBox";
import {formatNearAmount} from "near-api-js/lib/utils/format";
import {useFetchCollectionStats} from "../../../../hooks/collection/useFetchCollectionStats";
import {CollectionId, ContractId} from "../../../../business-logic/types/aliases";
import CollectionBannerLoader from "../../../Common/Loaders/CollectionBannerLoader";

interface PropTypes {
    contractId: ContractId
    collectionId: CollectionId
}

const CollectionStats: React.FC<PropTypes> = ({
    contractId,
    collectionId
}) => {

    const {loading, floar, volume, supply, sales, listed, average} = useFetchCollectionStats(contractId, collectionId)

    const floarPrice = formatNearAmount(floar || "", 3)
    const volumeTraded = formatNearAmount(volume || "", 3)
    const averagePrice = formatNearAmount(average || "", 3)

    return (
        <>
            {loading
                ?
                <div className="h-[80px] rounded-2xl overflow-hidden">
                    <CollectionBannerLoader/>
                </div>
                :
                <div className="flex flex-wrap rounded-2xl overflow-hidden
                                ring-[1px] ring-blue-200 mx-2 shadow-mjol-blue"
                >
                    <StatBox name="items" value={supply || "---"}/>
                    <StatBox name="listed" value={listed || "0"}/>
                    <StatBox name="sales" value={sales || "0"}/>
                    <StatBox name="floor price" value={floarPrice === "0" ? "---" : floarPrice} priceValue={true}/>
                    <StatBox name="average price" value={averagePrice} priceValue={true}/>
                    <StatBox name="volume traded" value={volumeTraded} priceValue={true}/>
                </div>
            }
        </>
    );
};

export default memo(CollectionStats);