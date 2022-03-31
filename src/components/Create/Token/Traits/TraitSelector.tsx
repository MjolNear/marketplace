import React from 'react';
import {Controller, FieldArrayWithId, UseFieldArrayRemove, useFormContext} from "react-hook-form";
import {SingleTraitInput} from "../MintTokenForm";

interface TraitSelectorProps {
    field: FieldArrayWithId<{ traits: SingleTraitInput[] }, "traits">
    remove: UseFieldArrayRemove
}


const TraitSelector: React.FC<TraitSelectorProps> = ({
    field,
    remove
}) => {

    const {control} = useFormContext()

    return <></>
    // <Controller name={`{${field.id}`}
    //             control={control}
    //             render={
    //                 (field: {onChange, value}) =>
    //             }
    // />
    //
    // );
};

export default TraitSelector;