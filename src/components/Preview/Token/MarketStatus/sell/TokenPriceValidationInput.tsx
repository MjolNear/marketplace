import React, {memo} from 'react';
import {UseFormRegister} from "react-hook-form";
import TokenPriceInput from "./TokenPriceInput";

interface TokenPriceValidationInputProps {
    register: UseFormRegister<{ price: number }>
    isPriceValid: boolean
    errorMessage?: string
}

const TokenPriceValidationInput: React.FC<TokenPriceValidationInputProps> = ({
    register,
    isPriceValid,
    errorMessage
}) => {
    return (
        <div className="space-y-1">
            <div className="text-sm text-gray-900 font-semibold">
                Price
            </div>
            <TokenPriceInput register={register}/>
            {!isPriceValid &&
                <div className="hidden md:block pt-1 text-center text-gray-700 text-xs font-semibold">
                    {errorMessage}
                </div>
            }
        </div>
    );
};

export default memo(TokenPriceValidationInput);