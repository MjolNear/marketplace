import React from 'react';
import PreviewNftPrice from "../Blocks/PreviewNftPrice";
// import PreviewNftPrice from "../../../Small/Blocks/";

const withPriceContainer = (Component) => ({price, ...props}) => {
    return (
        <div className="rounded-lg px-5 py-2 space-y-2 bg-blue-100">
            <PreviewNftPrice price={price}/>
            <Component {...props}/>
        </div>
    );
};

export default withPriceContainer;