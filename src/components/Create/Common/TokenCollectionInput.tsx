import React, {memo, useMemo} from 'react';
import InputLabel from "../../Common/Forms/InputLabel";
import BaseListSelect from "../../Common/Forms/BaseListSelect";
import {Img} from "react-image";
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {TSelectedCollection} from "../Token/MintTokenForm";
import {Collection} from "../../../business-logic/models/collection";
import {useFormContext} from "react-hook-form";
import {useFetchUserCollections} from "../../../hooks/collection/useFetchUserCollections";

interface TokenCollectionInputProps {
    accountId: string
}


const TokenCollectionInput: React.FC<TokenCollectionInputProps> = ({
    accountId
}) => {

    const {collections} = useFetchUserCollections(accountId)

    const {register, formState} = useFormContext<{
        collection?: {
            id: string,
            name: string
        }
    }>()

    // const options = useMemo(
    //     () => {
    //         if (collections.length === 0) {
    //             return []
    //         }
    //         const none: TSelectedCollection[] = [{}]
    //         return none
    //             .concat(collections
    //                 .map(collection => ({
    //                     id: collection.collection_id,
    //                     name: collection.title,
    //                     reference: collection.reference,
    //                     icon: <Img src={collection.media}
    //                                className="rounded-full w-[30px] max-h-[30px] object-contain"
    //                                alt={collection.title}
    //                                loader={<MjolLoader size={25}/>}
    //                     />
    //                 })))
    //     }, [collections])


    return (
        <div className="pb-12">
            <InputLabel label="Collection" description="NFT will be minted as part of your collection"/>
            {/*<BaseListSelect items={options}*/}
            {/*                setSelected={setSelectedCollection}*/}
            {/*                selected={selectedCollection}*/}
            {/*/>*/}
        </div>
    );
};

export default memo(TokenCollectionInput);