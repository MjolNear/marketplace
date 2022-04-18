import React, {Fragment, memo, useMemo} from 'react';
import InputLabel from "../../../Common/Forms/InputLabel";
import {Controller, useFormContext} from "react-hook-form";
import {useFetchUserCollections} from "../../../../hooks/collection/useFetchUserCollections";
import {Listbox, Transition} from '@headlessui/react';
import ListButton from "../../../Common/Forms/List/ListButton";
import ListOption from "../../../Common/Forms/List/ListOption";
import {Img} from "react-image";
import {Optional} from "../../../../business-logic/types/aliases";
import {ListItem} from "../../../Common/Forms/List/IListFormProps";
import CircleIconLoader from "../../../Common/Loaders/CircleIconLoader";

interface TokenCollectionInputProps {
    accountId: string
}

const TokenCollectionInput: React.FC<TokenCollectionInputProps> = ({
    accountId
}) => {

    const {collections} = useFetchUserCollections(accountId)

    const {items, map} = useMemo(() => {
        const items = collections.map(collection => ({
                id: collection.collection_id,
                name: collection.title,
                reference: collection.reference,
                icon: <Img src={collection.media}
                           alt={collection.title}
                           loader={<CircleIconLoader size={30}/>}
                           className="rounded-full w-[30px] max-h-[30px] object-contain"
                />
            })
        )

        const map: Record<string, ListItem> =
            items.reduce((acc, item) => ({...acc, [item.id]: item}), {})

        return {items, map}
    }, [collections])

    const {control} = useFormContext<{
        collection: {
            id: string,
            name: string,
            reference: Optional<string>
        } | null
    }>()

    return (
        <div>
            <InputLabel label="Collection" description="NFT will be minted as part of your collection"/>
            <Controller control={control}
                        render={
                            ({field: {onChange, value}}) =>
                                <Listbox value={value?.id || null}
                                         onChange={e => onChange(e ? map[e] : null)}
                                >
                                    <div className="relative mt-1 font-archivo">
                                        <ListButton placeholder="Select collection"
                                                    selected={value?.id ? map[value?.id] : null}
                                        />
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