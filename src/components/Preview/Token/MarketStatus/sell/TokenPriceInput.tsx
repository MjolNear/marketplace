import React, {memo} from 'react';
import {UseFormRegister} from "react-hook-form";
import {MAX_ITEM_NEAR_PRICE} from "../../../../../utils/string";
import NearIcon from "../../../../Icons/near/NearIcon";
import BaseInput from "../../../../Common/Forms/BaseInput";

interface TInputPriceFormProps {
    register: UseFormRegister<{ price: number }>
}

const TokenPriceInput: React.FC<TInputPriceFormProps> = ({
    register
}) => {
    return (
        <div className="flex justify-between gap-4 items-center">
            <BaseInput
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
                // children={<NearIcon/>}
                type="number"
                step="any"
                placeholder="NFT price"
            />
        </div>
    );
};

export default memo(TokenPriceInput)
