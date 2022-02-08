import React from 'react';
import PreviewNftPrice from "../Blocks/PreviewNftPrice";

interface PriceProps {
    nearPrice: string
    usdPrice: string
}

function withPriceContainer<T>(Child: React.ComponentType<T>) {
    const wrapped: React.FC<T & PriceProps> = (props) => (
        <div className="rounded-lg px-6 py-4 space-y-1 bg-white drop-shadow-xl ring-1 ring-gray-200">
            <div className="font-archivo font-medium text-gray-500 text-sm-3">Current price</div>
            <PreviewNftPrice nearPrice={props.nearPrice} usdPrice={props.usdPrice}/>
            <Child {...props}/>
        </div>
    );

    return wrapped
}

export default withPriceContainer;