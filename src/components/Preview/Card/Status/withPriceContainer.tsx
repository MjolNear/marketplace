import React from 'react';
import PreviewNftPrice from "../Blocks/PreviewNftPrice";

interface PriceProps {
    nearPrice: string
    usdPrice: string
}

function withPriceContainer<T>(Child: React.ComponentType<T>) {
    const wrapped: React.FC<T & PriceProps> = (props) => (
        <div className="rounded-lg px-6 py-4 bg-blue-100">
            <div className="font-bold font-archivo text-left text-md text-gray-600 w-full">
                Current price
            </div>
            <PreviewNftPrice nearPrice={props.nearPrice} usdPrice={props.usdPrice}/>
            <Child {...props}/>
        </div>
    );

    return wrapped
}

export default withPriceContainer;