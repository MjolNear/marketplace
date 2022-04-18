import React, {memo} from 'react';
import CollectionStatBox from "./CollectionStatBox";
import {formatNearAmount} from "near-api-js/lib/utils/format";
import {useFetchCollectionStats} from "../../../../hooks/collection/useFetchCollectionStats";
import {CollectionId, ContractId} from "../../../../business-logic/types/aliases";
import RectLoader from "../../../Common/Loaders/RectLoader";

interface PropTypes {
    contractId: ContractId
    collectionId: CollectionId
}

const CollectionStats: React.FC<PropTypes> = ({
    contractId,
    collectionId
}) => {

    const {loading, floor, volume, supply, sales, listed, average} = useFetchCollectionStats(contractId, collectionId)

    const floorPrice = formatNearAmount(floor || "", 4)
    const volumeTraded = formatNearAmount(volume || "", 4)
    const averagePrice = formatNearAmount(average || "", 4)

    return (
        <>
            {loading
                ?
                <div className="h-[150px] rounded-xl overflow-hidden">
                    <RectLoader/>
                </div>
                :
                <div className="grid grid-cols-3 ring-[1.5px] ring-blue-200 rounded-xl shadow-mjol-blue overflow-hidden"
                >
                    <CollectionStatBox name="items" value={supply || "---"}/>
                    <CollectionStatBox name="listed" value={listed || "0"}/>
                    <CollectionStatBox name="sales" value={sales || "0"}/>
                    <CollectionStatBox name="floor price" value={floorPrice === "0" ? "---" : floorPrice} priceValue={true}/>
                    <CollectionStatBox name="average price" value={averagePrice} priceValue={true}/>
                    <CollectionStatBox name="volume traded" value={volumeTraded} priceValue={true}/>
                </div>
            }
        </>
    );
};

export default memo(CollectionStats);