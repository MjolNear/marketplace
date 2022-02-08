import React from 'react';
import PreviewNftPrice from "../Blocks/PreviewNftPrice";

interface PriceProps {
    nearPrice: string
    usdPrice: string
}

function withPriceContainer<T>(Child: React.ComponentType<T>) {
    const wrapped: React.FC<T & PriceProps> = (props) => (
        <div className="rounded-lg px-5 py-2 space-y-2 bg-blue-100">
            <PreviewNftPrice nearPrice={props.nearPrice} usdPrice={props.usdPrice}/>
            <Child {...props}/>
        </div>
    );

    return wrapped
}

export default withPriceContainer;