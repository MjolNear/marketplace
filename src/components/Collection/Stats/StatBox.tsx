import React from 'react';
import NearBlackLogo from "../../Icons/near/NearBlackLogo";

interface PropTypes {
    name: string,
    value: string,
    priceValue?: boolean
}

const StatBox = React.memo<PropTypes>(({name, value, priceValue }) => {
    return (
        <div className="flex grow flex-col ring-mjol-blue-base ring-[0.5px] px-10 py-3 items-center">
            <div className="font-archivo font-medium opacity-80 text-sm">{name}</div>
            {priceValue
                ? <div className="inline-flex gap-3">
                    <NearBlackLogo size={16}/>
                    <div className="font-archivo font-extrabold text-2xl">{value}</div>
                </div>
                    : <div className="font-archivo font-extrabold text-2xl">{value}</div>
            }
        </div>
    );
});

export default StatBox;