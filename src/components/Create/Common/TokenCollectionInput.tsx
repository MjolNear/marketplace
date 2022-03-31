import React, {Fragment, memo, useMemo} from 'react';
import InputLabel from "../../Common/Forms/InputLabel";
import {useFormContext, Controller} from "react-hook-form";
import {useFetchUserCollections} from "../../../hooks/collection/useFetchUserCollections";
import {Listbox, Transition} from '@headlessui/react';
import ListButton from "../../Common/Forms/List/ListButton";
import ListOptions from "../../Common/Forms/List/ListOptions";
import ListOption from "../../Common/Forms/List/ListOption";
import {Img} from "react-image";
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {ListItem} from "../../Common/Forms/List/IListFormProps";
import {Optional} from "../../../business-logic/models/types";

interface TokenCollectionInputProps {
    accountId: string
}

interface ISelectedCollection {
    id: string,
    name: string,
    icon?: React.ReactNode
}


const TokenCollectionInput: React.FC<TokenCollectionInputProps> = ({
    accountId
}) => {

    const {collections} = useFetchUserCollections(accountId)

    const items = useMemo(() =>
        collections.map(collection => ({
                id: collection.collection_id,
                name: collection.title,
                reference: collection.reference,
                icon: <Img src={collection.media} alt={collection.title} loader={<MjolLoader size={25}/>}
                           className="rounded-full w-[30px] max-h-[30px] object-contain"/>
            })
        ), [collections])

    const {control} = useFormContext<{
        collection: {
            id: string,
            name: string,
            reference: Optional<string>
        } | null
    }>()

    return (
        <div className="pb-12">
            <InputLabel label="BlockhainCollection" description="NFT will be minted as part of your collection"/>
            <Controller control={control}
                        render={
                            ({field: {onChange, value}}) =>
                                <Listbox value={value}
                                         onChange={event => onChange(event ? event : null)}
                                >
                                    <div className="relative mt-1 font-archivo">
                                        <ListButton placeholder="Select collection" selected={value}/>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options
                                                className="absolute z-10 w-full mt-3 overflow-auto text-base bg-white
                                                       rounded-lg shadow-mjol-gray max-h-60 ring-[1px] ring-gray-300
                                                       focus:outline-none sm:text-sm"
                                            >
                                                {items.length === 0
                                                    ?
                                                    <div className="px-6 py-3 font-semibold">
                                                        Collections no found
                                                    </div>
                                                    :
                                                    <>
                                                        <ListOption defaultText="No collection"
                                                                    useCheckIcon={true}
                                                        />
                                                        {items.map(item => <ListOption key={item.id}
                                                                                       item={item}
                                                                                       useCheckIcon={true}/>
                                                        )}
                                                    </>
                                                }
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                        }
                        name="collection"
            />
        </div>
    );
};

export default memo(TokenCollectionInput);