import React from 'react';
import InputLabel from "../../../Common/Forms/InputLabel";
import {BiDna} from "react-icons/bi";
import IconText from "../../../Icons/IconText";
import {Control, Controller, useFieldArray} from 'react-hook-form';
import {TokenFormFields} from "../MintTokenForm";
import PlusButton from "../../../Common/Buttons/PlusButton";
import BaseInput from "../../../Common/Forms/BaseInput";
import MinusButton from "../../../Common/Buttons/MinusButton";
import TraitSelector from "./TraitSelector";

interface TraitsInputProps {

}

const TraitsInput: React.FC<TraitsInputProps> = ({
    // control
}) => {

    // const {fields: traitFields, append, remove} = useFieldArray({
    //     control,
    //     name: "traits"
    // });

    const label = <IconText icon={<BiDna/>} text="Traits"/>

    return (
        <TraitSelector/>
        // <div className="flex flex-col items-start">
        //     <InputLabel label={label}
        //                 description="You can additionally provide NFT traits."
        //     />
        //     {traitFields.map((field, index) => (
        //         <div key={field.id}
        //              className="inline-flex gap-3 mb-2 items-center"
        //         >
        //             <BaseInput key={`${field.id}-attribute`}
        //                        placeholder={`${index}`}
        //                        {...control.register(`traits.${index}.attribute`, {})}
        //             />
        //
        //             <BaseInput key={`${field.id}-value`}
        //                        placeholder={`${field.id}`}
        //                        {...control.register(`traits.${index}.value`, {})}
        //             />
        //             <MinusButton onClick={() => remove(index)}/>
        //         </div>
        //     ))}
        //     {traitFields.length < 10 &&
        //         <PlusButton onClick={() => append({attribute: "", value: ""})}/>
        //     }
        // </div>
    );
};

export default TraitsInput;