import React, {useMemo} from 'react';
import CollectionLink from "./CollectionLink";
import DropDownMjolButton from "../../../ui/buttons/DropDownMjolButton";
import SellNftButton from "../nft-action/SellNftButton";
import NftTitle from "../../details/title/NftTitle";

const NftInfo = ({nft}) => {

    const tabs = useMemo(() => ({
        'Collection': nft.description,
        'Attributes': nft.owner_id
    }), [])

    return (
        <div className="space-y-5">
            <div>
                <NftTitle title={nft.title}/>
                <CollectionLink name={nft.description} link=""/>
            </div>
            <SellNftButton/>
            <div className="space-y-3">
                {Object.keys(tabs).map(key => (
                        <DropDownMjolButton title={key}>
                            <div className="
                                px-4 py-2 rounded-lg w-full
                                text-blue-500 font-medium
                                text-md md:text-lg
                                ring-blue-200 ring-1 ring-inset
                        ">
                                {tabs[key]}
                            </div>
                        </DropDownMjolButton>
                    )
                )}
            </div>
        </div>
    );
};

export default NftInfo;