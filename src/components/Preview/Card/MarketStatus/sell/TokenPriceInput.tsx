import React, {memo} from 'react';
import {UseFormRegister} from "react-hook-form";
import {MAX_ITEM_NEAR_PRICE} from "../../../../../utils/string";
import NearBlackLogo from "../../../../Icons/near/NearBlackLogo";

interface TInputPriceFormProps {
    register: UseFormRegister<{ price: number }>
}

const TokenPriceInput: React.FC<TInputPriceFormProps> = ({
    register
}) => {
    return (
        <div className="flex justify-between gap-3">
            <input
                min="0"
                className="w-full px-3 py-2 rounded-lg border-transparent text-gray-800 text-base
                       bg-black bg-opacity-5 focus:bg-opacity-10 focus:text-black
                       focus:border-transparent focus:ring-0"
                type="number"
                step="any"
                placeholder="NFT price"
                {...register("price", {
                    required: true,
                    max: {
                        value: MAX_ITEM_NEAR_PRICE,
                        message: `Maximum price is ${MAX_ITEM_NEAR_PRICE} Ⓝ`
                    },
                    min: {
                        value: 0,
                        message: "Minimum price is 0 Ⓝ"
                    },
                })}
            />
            <NearBlackLogo/>
        </div>
    );
};

export default memo(TokenPriceInput)
