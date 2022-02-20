import React from 'react';
import PreviewNftPrice from "../Blocks/PreviewNftPrice";

interface PriceProps {
    nearPrice: string
    usdPrice: string
}

function withPriceContainer<T>(Child: React.ComponentType<T>) {
    const wrapped: React.FC<T & PriceProps> = (props) => {
        const {nearPrice, usdPrice} = props
        return (
            <div className="rounded-xl px-[24px] py-[18px] bg-mjol-blue-card-property flex flex-col gap-4">
                <div className="font-bold font-archivo text-left text-sm text-gray-600 w-full">
                    CURRENT PRICE
                    <hr/>
                </div>
                <PreviewNftPrice nearPrice={nearPrice} usdPrice={usdPrice}/>
                <Child {...props}/>
            </div>
        );
    }

    return wrapped
}

export default withPriceContainer;