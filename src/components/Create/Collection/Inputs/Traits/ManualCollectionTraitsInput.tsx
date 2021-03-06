import React from 'react';
import {useFieldArray, useFormContext} from "react-hook-form";
import {CollectionTraitInput} from "../../../../../@types/Form";
import BaseInput from "../../../../../@ui/Forms/BaseInput";
import ManualTraitValuesInput from "./ManualTraitValuesInput";
import PlusButton from "../../../../../@ui/Buttons/PlusButton";
import MinusButton from "../../../../../@ui/Buttons/MinusButton";

const ManualCollectionTraitsInput = () => {

    const {control, formState} = useFormContext<{ traits: CollectionTraitInput[] }>()

    const {fields, remove, append} = useFieldArray({
        control,
        name: "traits"
    })

    return (
        <div className="space-y-7">
            {fields.map(
                (field, index) => (
                    <div className="grid grid-cols-[45px_4fr_5fr] gap-3" key={field.id}>
                        <MinusButton onClick={() => remove(index)} width={45} height={45}/>
                        <BaseInput placeholder="e.g. Eyes"
                                   error={formState.errors?.traits?.[index]?.attribute?.message}
                                   {...control.register(`traits.${index}.attribute`, {
                                       required: {
                                           value: true,
                                           message: "Missed attribute value"
                                       }
                                   })}
                        />
                        <ManualTraitValuesInput index={index}/>
                    </div>
                ))
            }
            <PlusButton onClick={() => append({attribute: "", values: [{value: ""}]})}
                        height={45}
                        text="Add attribute"
            />
        </div>
    );
};

export default ManualCollectionTraitsInput;