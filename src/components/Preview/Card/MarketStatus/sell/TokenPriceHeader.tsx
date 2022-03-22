import React, {memo} from 'react';
import {AiOutlineClose} from "react-icons/ai";

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
            <div className="text-blue-600 font-archivo font-bold text-2xl text-center mb-4">
                List NFT for sale
            </div>
            {/*<DarkBlueMjolText text="List NFT for sale"*/}
            {/*                  classes="text-2xl font-black pb-4 text-center"/>*/}
        </>
    );
};

export default memo(TokenPriceHeader);