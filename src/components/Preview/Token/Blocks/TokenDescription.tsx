import React, {memo} from 'react';
import {Optional} from '../../../../business-logic/models/types';
import {MdDescription} from "react-icons/md";
import IconDisclosureButton from "../../../Common/Disclosure/IconDisclosureButton";

interface TTokenDescription {
    description?: Optional<string>
}

const TokenDescription: React.FC<TTokenDescription> = ({
    description
}) => {
    return (
        <IconDisclosureButton name="Description"
                              icon={<MdDescription/>}
                              defaultOpen={true}
        >
            <div className="font-archivo text-center">
                {description || "NFT has no description"}
            </div>
        </IconDisclosureButton>
    )
};

export default TokenDescription;