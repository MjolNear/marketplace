import React, {memo} from 'react';
import {UseFormRegister} from "react-hook-form";
import TokenPriceInput from "./TokenPriceInput";
import BaseInput from "../../../../Common/Forms/BaseInput";
import {MAX_ITEM_NEAR_PRICE} from "../../../../../utils/string";
import NearIcon from "../../../../Icons/near/NearIcon";

interface TokenPriceValidationInputProps {
    register: UseFormRegister<{ price: number }>
    isPriceValid: boolean
    errorMessage?: string
}

const TokenPriceValidationInput: React.FC<TokenPriceValidationInputProps> = ({
    register,
    errorMessage
}) => {
    return (
        <div className="space-y-1 mb-4">
            <div className="text-sm text-gray-900 font-semibold">
                Price
            </div>
            <div className="flex justify-between gap-4 items-center">
                <BaseInput
                    type="number"
                    step="any"
                    placeholder="NFT price"
                    error={errorMessage}
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
                >
                    <NearIcon/>
                </BaseInput>
            </div>
        </div>
    );
};

export default memo(TokenPriceValidationInput);