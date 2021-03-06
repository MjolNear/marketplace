import React, {memo} from 'react';
import Hr from "../../../../Common/Borders/Hr";
import DarkBlueGradientButton from "../../../../../@ui/Buttons/DarkBlueGradientButton";

interface TTokenPriceFooterProps {
    isPriceValid: boolean,
    isLoading: boolean
}

const TokenPriceFooter: React.FC<TTokenPriceFooterProps> = ({
    isPriceValid,
    isLoading
}) => {
    return (
        <div className="items-center flex flex-col mt-3 w-full font-archivo">
            <Hr color="bg-gray-400"/>
            <p className="text-black text-sm mt-3 text-center opacity-60">
                You will be redirected to
                NEAR Web Wallet to confirm your transaction.
            </p>
            <div className="mt-4 w-full max-w-[350px]">
                <DarkBlueGradientButton title="Complete" isLoading={isLoading} disabled={!isPriceValid}/>
            </div>
        </div>
    );
};

export default memo(TokenPriceFooter);