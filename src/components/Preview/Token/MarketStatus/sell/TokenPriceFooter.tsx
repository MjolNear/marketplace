import React, {memo} from 'react';
import DarkBlueGradientButton from "../../../../Common/Buttons/DarkBlueGradientButton";
import Hr from "../../../../Common/Borders/Hr";

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
            <div className="mt-4">
                <DarkBlueGradientButton title="Complete"
                                        isLoading={isLoading}
                                        disabled={!isPriceValid}
                                        style={{
                                            width: 300
                                        }}
                />
            </div>
        </div>
    );
};

export default memo(TokenPriceFooter);