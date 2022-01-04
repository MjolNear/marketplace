import React from 'react';
import PreviewNftPrice from "../../details/price/PreviewNftPrice";

const PriceContainer = ({price, isListed, element, text}) => {
    return (
        <div className="bg-gray-900 rounded-lg p-2">
            {isListed
                ?
                <div>
                    <PreviewNftPrice price={price}/>
                    {element}
                </div>
                :
                <div className="text-center font-medium text-md md:text-lg text-blue-100">
                    {text}
                </div>
            }
        </div>
    );
};

export default PriceContainer;