import React, {memo} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import DarkBlueMjolText from "../../../../Common/Text/DarkBlueMjolText";
import GradientText from "../../../../Common/Text/GradientText";
import LightBlueGradientText from "../../../../Common/Text/LightBlueGradientText";

interface TTokenPriceHeaderProps {
    closeModal: React.MouseEventHandler
}

const TokenPriceHeader: React.FC<TTokenPriceHeaderProps> = ({
    closeModal
}) => {
    return (
        <>
            <div className="absolute right-0 top-0 pr-4 pt-4">
                <AiOutlineClose onClick={closeModal} className="cursor-pointer" size={20}/>
            </div>
            <GradientText text="List NFT for sale"
                          size="2xl"
                          fontWeight="extrabold"
                          extraClasses="bg-gradient-to-r from-blue-700 to-blue-400 mb-3"
            />
        </>
    );
};

export default memo(TokenPriceHeader);