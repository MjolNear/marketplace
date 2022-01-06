import React from 'react';
import PreviewNftPrice from "../../../details/price/PreviewNftPrice";

const withPriceContainer = (Component) => ({price, ...props}) => {
    return (
        <div className="bg-mjol-blue-base rounded-lg p-2">
            <div>
                <PreviewNftPrice price={price}/>
                <Component {...props}/>
            </div>
        </div>
    );
};

export default withPriceContainer;