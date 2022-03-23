import React from 'react';
import IconDisclosure from "../../../Common/Disclosure/IconDisclosureButton";
import {BiDna} from "react-icons/bi";

interface TTokenTraitsProps {
    traits: any
}


const TokenTraits: React.FC<TTokenTraitsProps> = () => {
    return (
        <IconDisclosure icon={<BiDna/>}
                        name="Traits"
        >
            <div className="font-archivo text-center font-semibold">Currently not supported</div>
        </IconDisclosure>
    );
};

export default TokenTraits;