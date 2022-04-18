import React, {memo} from 'react';
import NearIcon from "../../../Icons/near/NearIcon";
import Tooltip from "../../../Layout/Tooltip";
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";

interface CollectionStatProps {
    name: string,
    value: string | number,
    priceValue?: boolean
}

const CollectionStatBox: React.FC<CollectionStatProps> = ({
    name,
    value,
    priceValue
}) => {
    return (
        <div className="flex flex-col items-center ring-blue-200 ring-[0.75px]
                        font-archivo px-5 py-3 text-black"
        >
            {priceValue
                ?
                <div className="inline-flex gap-2 w-full items-center justify-center cursor-pointer"
                   data-for={`collectionStat-${name}Id`}
                   data-tip={`${value}  Ⓝ`}
                >
                    <div className="w-[12px] lg:w-[14px]">
                        <NearIcon fill="w-[12px] lg:w-[14px]" size=""/>
                    </div>
                    <div className="truncate font-extrabold text-sm sm:text-md md:text-lg">
                        {value}
                    </div>
                    <Tooltip id={`collectionStat-${name}Id`} place="bottom"/>
                </div>
                :
                <span className="truncate font-extrabold text-sm sm:text-md md:text-lg">
                    {value}
                </span>
            }
            <span className="text-[11px] lg:text-[13px] text-gray-700">
                {name}
            </span>
        </div>
    );
};

export default memo(CollectionStatBox);