import React, {useMemo} from 'react';
import CollectionLink from "./CollectionLink";
import DropDownMjolButton from "../../../ui/buttons/DropDownMjolButton";
import NftPreviewTitle from "./NftPreviewTitle";

const NftPreviewInfo = ({nft, accountId}) => {

    const tabs = useMemo(() => ({
        'Description': nft.description,
        'Attributes': `owner:    ${nft.ownerId} 
                      contract: ${nft.contractId}
                      token:    ${nft.tokenId}
                      `
    }), [])

    const info = Object.keys(tabs).map(key => (
        <DropDownMjolButton key={key} title={key}>
            <div className="
                                px-4 py-2 rounded-lg w-full
                                text-blue-500 font-medium
                                text-md md:text-lg
                                ring-blue-200 ring-1 ring-inset
                        ">
                {tabs[key]}
            </div>
        </DropDownMjolButton>
    ))


    return (
        <div className="space-y-5 md:max-w-xl">
            <div>
                <NftPreviewTitle title={nft.title}/>
                <CollectionLink name={"MOCK"} link=""/>
            </div>
            <div className="space-y-3">
                {info}
            </div>
        </div>
    );
};

export default NftPreviewInfo;