import React, {memo} from 'react';
import StatBox from "./StatBox";
import {formatNearAmount, parseNearAmount} from "near-api-js/lib/utils/format";

interface PropTypes {
    floar?: string,
    supply?: number,
    volume?: string,
    sales?: string
}

const CollectionStats: React.FC<PropTypes> = ({
    floar,
    supply,
    volume,
    sales
}) => {
    const floarPrice = formatNearAmount(floar || "", 3)
    const volumeTraded = formatNearAmount(volume || "", 3)

    return (
        <div className="flex flex-wrap rounded-2xl overflow-hidden
                        ring-[1px] ring-blue-200 mx-2 shadow-mjol-blue-all-xs"
        >
            <StatBox name="items"
                     value={supply || "---"}
            />
            <StatBox name="sales"
                     value={sales || "0"}
            />
            <StatBox name="floar price"
                     value={floarPrice === "0" ? "---" : floarPrice}
                     priceValue={true}
            />
            <StatBox name="volume traded"
                     value={volumeTraded}
                     priceValue={true}
            />
        </div>
    );
};

export default memo(CollectionStats);