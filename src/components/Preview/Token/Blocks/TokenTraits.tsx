import React, {memo} from 'react';
import IconDisclosure from "../../../Common/Disclosure/IconDisclosureButton";
import {BiDna} from "react-icons/bi";
import {Optional} from "../../../../@types/Aliases";
import TokenAttributes from "../../../TokenAttributes/TokenAttributes";
import MjolLoader from "../../../../@ui/Loaders/MjolLoader";

interface TTokenTraitsProps {
    loading: boolean
    traits?: Optional<{ trait_type: string, value: string }[]>
}


const TokenTraits: React.FC<TTokenTraitsProps> = ({
    loading,
    traits
}) => {
    const attributes = traits || []
    return (
        <IconDisclosure icon={<BiDna/>}
                        defaultOpen={true}
                        name="Traits"
        >
            <div className="flex flex-col gap-2 font-archivo">
                {attributes.length === 0
                    ?
                    loading
                        ? <MjolLoader/>
                        : <div>No attributes found</div>
                    : <TokenAttributes attributes={attributes}/>
                }
            </div>

        </IconDisclosure>
    );
};

export default memo(TokenTraits);