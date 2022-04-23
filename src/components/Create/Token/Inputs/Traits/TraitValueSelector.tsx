import React from 'react';
import {Listbox} from "@headlessui/react";
import ListButton from "../../../../Common/Forms/List/ListButton";
import ListOption from "../../../../Common/Forms/List/ListOption";
import {Controller, useFormContext} from "react-hook-form";
import {TokenTraitInput} from "../../../../../@types/Form";

interface TraitValueSelectorProps {
    index: number
    values: string[]
}

const TraitValueSelector: React.FC<TraitValueSelectorProps> = ({
    index,
    values
}) => {

    const {control} = useFormContext<{ traits: TokenTraitInput[] }>()

    return (
        <Controller name={`traits.${index}.value`}
                    control={control}
                    render={({field: {value, onChange}}) =>
                        <Listbox value={value}
                                 onChange={onChange}
                        >
                            <div className="relative font-archivo">
                                <ListButton placeholder="Select value"
                                            selected={{
                                                name: value,
                                                id: value
                                            }}
                                />
                                <Listbox.Options
                                    className="absolute z-10 w-fit mt-3 overflow-auto text-base bg-white
                                               min-w-[120px]
                                               rounded-lg shadow-mjol-gray max-h-60 ring-[1px] ring-gray-300
                                               focus:outline-none sm:text-sm"
                                >
                                    {values.map(item =>
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

export default TraitValueSelector;