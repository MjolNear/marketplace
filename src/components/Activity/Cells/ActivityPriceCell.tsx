import React from 'react';
import NearBlackLogo from "../../Icons/near/NearIcon";
import BaseActivityCell from "./BaseActivityCell";
import {fromYocto2Near} from "../../../utils/string";
import {Optional} from "../../../@types/Aliases";

interface ActivityPriceCellProps {
    price?: Optional<string>
}

const ActivityPriceCell: React.FC<ActivityPriceCellProps> = ({
    price
}) => {
    return (
        <BaseActivityCell>
            {price ?
                <>
                    <div className="min-w-[15px]">
                        <NearBlackLogo size={15}/>
                    </div>
                    <span className="text-black font-bold truncate">
                        {fromYocto2Near(price, 5)}
                    </span>
                </>
                : "---"
            }
        </BaseActivityCell>
    );
};

export default ActivityPriceCell;