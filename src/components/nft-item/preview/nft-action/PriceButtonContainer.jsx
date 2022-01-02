import React from 'react';
import PreviewNftPrice from "../../details/price/PreviewNftPrice";

const PriceButtonContainer = ({price, isListed, button}) => {
    return (
        <div className="rounded-lg bg-blue-100 px-2 pb-3 pt-1 space-y-2">
            <PreviewNftPrice price={price} isListed={isListed}/>
            {button}
        </div>
    );
};

export default PriceButtonContainer;