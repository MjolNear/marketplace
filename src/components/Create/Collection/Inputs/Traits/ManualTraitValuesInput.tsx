import React from 'react';
import {useFieldArray, useFormContext} from "react-hook-form";
import {CollectionTraitInput} from "../../../../../@types/Form";
import PlusButton from "../../../../Common/Buttons/PlusButton";
import BaseInput from "../../../../../@UI/Forms/BaseInput";
import MinusButton from "../../../../Common/Buttons/MinusButton";

interface ManualTraitValuesInputProps {
    index: number
}


const ManualTraitValuesInput: React.FC<ManualTraitValuesInputProps> = ({
    index
}) => {

    const {control, formState} = useFormContext<{ traits: CollectionTraitInput[] }>()

    const {fields, remove, append} = useFieldArray({
        control,
        name: `traits.${index}.values`
    })

    return (
        <div className="flex flex-col items-end space-y-3 h-full">
            {fields.map((field, nestedIndex) => (
                <div className="grid grid-cols-[1fr_45px] gap-3" key={field.id}>
                    <BaseInput placeholder="e.g. Reg"
                               error={formState.errors?.traits?.[index]?.values?.[nestedIndex]?.value?.message}
                               {...control.register(`traits.${index}.values.${nestedIndex}.value`, {
                                   required: {
                                       value: true,
                                       message: "Missed trait value"
                                   }
                               })}
                    />
                    <MinusButton onClick={() => remove(nestedIndex)} width={45} height={45}/>
                </div>
            ))}
            <PlusButton height={45}
                        width={fields.length === 0 ? undefined : 45}
                        text={fields.length === 0 ? "Add value" : undefined}
                        onClick={() => append({value: ""})}/>
        </div>
    )
};

export default ManualTraitValuesInput;