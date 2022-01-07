import React from 'react';
import PreviewNftPrice from "../../../details/price/PreviewNftPrice";

const withPriceContainer = (Component) => ({price, ...props}) => {
    return (
        <div className="rounded-lg p-2 space-y-2 bg-blue-100">
            <PreviewNftPrice price={price}/>
            <Component {...props}/>
        </div>
    );
};

export default withPriceContainer;