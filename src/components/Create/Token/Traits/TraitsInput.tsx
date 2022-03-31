import React, {useEffect, useMemo, useState} from 'react';
import InputLabel from "../../../Common/Forms/InputLabel";
import {BiDna} from "react-icons/bi";
import IconText from "../../../Icons/IconText";
import {Control, Controller, useFieldArray, useFormContext} from 'react-hook-form';
import {SingleTraitInput, TokenFormFields} from "../MintTokenForm";
import PlusButton from "../../../Common/Buttons/PlusButton";
import BaseInput from "../../../Common/Forms/BaseInput";
import MinusButton from "../../../Common/Buttons/MinusButton";
import TraitSelector from "./TraitSelector";
import {useFetchCollectionTraits} from "../../../../hooks/collection/useFetchCollectionTraits";
import {Optional} from "../../../../business-logic/models/types";
import ListButton from "../../../Common/Forms/List/ListButton";
import {Listbox} from '@headlessui/react';
import ListOption from "../../../Common/Forms/List/ListOption";
import TraitAttributeSelector from "./TraitAttributeSelector";
import TraitValueSelector from "./TraitValueSelector";

interface TraitsInputProps {
    ipfsReference: Optional<string>
}

const TraitsInput: React.FC<TraitsInputProps> = ({
    ipfsReference
}) => {

    const {traits} = useFetchCollectionTraits(ipfsReference)

    const attributes = useMemo(() => Object.keys(traits || {}), [traits])

    const {control, resetField, watch} = useFormContext<{ traits: SingleTraitInput[] }>()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "traits"
    });

    useEffect(() => {
        resetField("traits")
    }, [ipfsReference])

    const label = <IconText icon={<BiDna/>} text="Traits"/>

    const picked = watch("traits")
    const possible = attributes.filter(key => !picked.map(t => t.attribute).includes(key))
    const next = possible.length !== 0 && traits?.[possible[0]].length !== 0
        ? {attribute: possible[0], value: traits?.[possible[0]][0]}
        : {}

    return (
        <div>
            <InputLabel label={label}
                        description={attributes.length !== 0
                            ? "Provide any collection traits for your NFT"
                            : "Traits for given collection not found"
                        }
            />
            {picked.length !== 0 &&
                <div className="flex flex-row flex-wrap gap-3 my-3">
                    {picked.map(trait =>
                        <div className="py-2 px-4 ring-[1px] ring-blue-300 text-xs font-archivo rounded-lg">
                            {trait.attribute}
                            <div className="font-bold text-[15px]">{trait.value}</div>
                        </div>
                    )}
                </div>
            }
            {traits &&
                <>
                    {fields.length !== 0 &&
                        <div className="grid grid-cols-[45px_1fr_1fr] gap-3">
                            {fields.map((field, index) => {
                                const values = traits[picked[index].attribute]
                                const pickedAttribute = picked[index].attribute
                                return (
                                    <>
                                        <MinusButton onClick={() => remove(index)}/>
                                        <TraitAttributeSelector index={index}
                                                                selected={pickedAttribute}
                                                                traits={traits}
                                                                attributes={possible}
                                        />
                                        <TraitValueSelector index={index} values={values}/>
                                    </>
                                )
                            })}
                        </div>
                    }
                    {fields.length < attributes.length &&
                        <div className="mt-3 h-[45px] w-[45px]">
                            <PlusButton onClick={() => append(next)}/>
                        </div>
                    }
                </>
            }
        </div>
    );
};

export default TraitsInput;