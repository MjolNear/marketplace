import React, {memo} from 'react';
import NearIcon from "../../../Icons/near/NearIcon";
import Tooltip from "../../../Layout/Tooltip";

interface CollectionStatProps {
    name: string
    value: string | number
    priceValue?: boolean
    dataFor: string
    dataTip: string
    place: "top" | "bottom"
}

const CollectionStatBox: React.FC<CollectionStatProps> = ({
    name,
    value,
    priceValue,
    dataFor,
    dataTip,
    place
}) => {
    return (
        <div className="flex flex-col items-start bg-white
                        font-archivo px-5 py-3 text-black cursor-pointer"
             data-for={dataFor}
             data-tip={dataTip}
        >
            {priceValue
                ?
                <div className="inline-flex gap-2 w-full items-center justify-start">
                    <div className="w-[12px] lg:w-[14px]">
                        <NearIcon fill="w-[12px] lg:w-[14px]" size=""/>
                    </div>
                    <div className="truncate font-black text-md sm:text-lg md:text-xl">
                        {value}
                    </div>
                </div>
                :
                <span className="truncate font-black text-md sm:text-lg md:text-xl">
                    {value}
                </span>
            }
            <span className="text-[11px] lg:text-[13px] text-mjol-secondary">
                {name}
            </span>
            <Tooltip id={dataFor} place={place} delayShow={250}/>
        </div>
    );
};

export default memo(CollectionStatBox);