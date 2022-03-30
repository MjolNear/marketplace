import React, {useMemo, useState} from 'react';
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

interface TraitsInputProps {
    ipfsReference: Optional<string>
}

const TraitsInput: React.FC<TraitsInputProps> = ({
    ipfsReference
}) => {


    const {traits} = useFetchCollectionTraits(ipfsReference)

    console.log(ipfsReference)
    // const [picked, setPicked] = useState({})


    const {control} = useFormContext<{ traits: SingleTraitInput[] }>()

    const {fields, append, remove} = useFieldArray({
        control,
        name: "traits"
    });

    const label = <IconText icon={<BiDna/>} text="Traits"/>

    return (
        <div>
            <InputLabel label={label}
                        description={traits && Object.values(traits).length !== 0
                            ? "Provide any collection traits for your NFT"
                            : "Traits for given collection not found"
                        }
            />
            {traits &&
                fields.map((field, index) =>
                    <BaseInput {...control.register("traits")}/>
                )
            }

        </div>
    );
};

export default TraitsInput;