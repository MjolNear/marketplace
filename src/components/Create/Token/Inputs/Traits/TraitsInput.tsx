import React, {Fragment, useMemo} from 'react';
import InputLabel from "../../../../../@ui/Forms/InputLabel";
import {BiDna} from "react-icons/bi";
import IconText from "../../../../Icons/IconText";
import {useFieldArray, useFormContext} from 'react-hook-form';
import {useFetchCollectionTraits} from "../../../../../hooks/collection/useFetchCollectionTraits";
import {Optional} from "../../../../../@types/Aliases";
import TraitAttributeSelector from "./TraitAttributeSelector";
import TraitValueSelector from "./TraitValueSelector";
import {TokenTraitInput} from "../../../../../@types/Form";
import MjolLoader from "../../../../../@ui/Loaders/MjolLoader";
import PlusButton from "../../../../../@ui/Buttons/PlusButton";
import MinusButton from "../../../../../@ui/Buttons/MinusButton";

interface TraitsInputProps {
    reference: Optional<string>
}

const TraitsInput: React.FC<TraitsInputProps> = ({
    reference
}) => {

    const {traits, loading} = useFetchCollectionTraits(reference)

    const attributes = useMemo(() => Object.keys(traits || {}), [traits])

    const {control, watch} = useFormContext<{ traits: TokenTraitInput[] | null }>()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "traits"
    });

    const label = <IconText icon={<BiDna/>} text="Traits"/>

    const picked = watch("traits") || []
    const possible = attributes.filter(key => !picked.map(t => t.attribute).includes(key))
    const next = possible.length !== 0 && traits?.[possible[0]].length !== 0
        ? {attribute: possible[0], value: traits?.[possible[0]][0]}
        : {}

    return (
        <div>
            <InputLabel label={label}
                        description={loading
                            ?
                            <div className="w-fit mt-2 space-y-2">
                                <MjolLoader/>
                                <div>Loading traits</div>
                            </div>
                            : attributes.length !== 0
                                ? "Provide any collection traits for your NFT"
                                : "No traits found for given collection"
                        }
            />
            {loading ?
                null
                :
                <>
                    {picked.length !== 0 &&
                        <div className="flex flex-row flex-wrap gap-3 my-3">
                            {picked.map(trait =>
                                <div key={trait.attribute}
                                     className="py-2 px-4 ring-[1px] ring-blue-300 text-xs font-archivo rounded-lg">
                                    {trait.attribute}
                                    <div className="font-bold text-[15px]">{trait.value}</div>
                                </div>
                            )}
                        </div>
                    }
                    {traits &&
                        <>
                            {picked.length !== 0 &&
                                <div className="grid grid-cols-[45px_1fr_1fr] gap-3">
                                    {fields.map((field, index) => {
                                        const values = traits[picked[index].attribute]
                                        const pickedAttribute = picked[index].attribute
                                        return (
                                            <Fragment key={field.id}>
                                                <MinusButton onClick={() => remove(index)}/>
                                                <TraitAttributeSelector index={index}
                                                                        selected={pickedAttribute}
                                                                        traits={traits}
                                                                        attributes={possible}
                                                />
                                                <TraitValueSelector index={index} values={values}/>
                                            </Fragment>
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
                </>
            }
        </div>
    );
};

export default TraitsInput;