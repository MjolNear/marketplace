import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {Listbox} from "@headlessui/react";
import ListButton from "../../../../../@UI/Forms/List/ListButton";
import ListOption from "../../../../../@UI/Forms/List/ListOption";
import {CollectionTraits} from "../../../../../@types/Collection";
import {TokenTraitInput} from "../../../../../@types/Form";

interface TraitAttributeSelectorProps {
    index: number
    attributes: string[]
    selected: string,
    traits: CollectionTraits
}

const TraitAttributeSelector: React.FC<TraitAttributeSelectorProps> = ({
    index,
    attributes,
    selected,
    traits
}) => {

    const {control, setValue} = useFormContext<{ traits: TokenTraitInput[] }>()

    return (
        <Controller name={`traits.${index}.attribute`}
                    control={control}
                    render={({field: {onChange}}) =>
                        <Listbox value={selected}
                                 onChange={event => {
                                     onChange(event)
                                     setValue(`traits.${index}.value`, traits[event][0])
                                 }}
                        >
                            <div className="relative font-archivo">
                                <ListButton placeholder="Select attribute"
                                            selected={{
                                                name: selected,
                                                id: selected
                                            }}
                                />
                                <Listbox.Options
                                    className="absolute z-10 w-fit mt-3 overflow-auto text-base bg-white
                                               min-w-[120px]
                                               rounded-lg shadow-mjol-gray max-h-60 ring-[1px] ring-gray-300
                                               focus:outline-none sm:text-sm"
                                >
                                    {attributes.length === 0
                                        ?
                                        <div className="px-6 py-3 font-semibold">
                                            No more available attributes
                                        </div>
                                        :
                                        attributes.map(item =>
                                            <ListOption key={item}
                                                        item={{name: item, id: item}}
                                                        useCheckIcon={true}/>
                                        )}
                                </Listbox.Options>
                            </div>
                        </Listbox>
                    }
        />
    );
};

export default TraitAttributeSelector;