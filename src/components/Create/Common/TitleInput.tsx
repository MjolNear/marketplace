import React from 'react';
import BaseInput from "../../Common/Forms/BaseInput";
import InputLabel from "../../Common/Forms/InputLabel";
import {useFormContext} from "react-hook-form";


interface TitleInputProps {
    placeholder: string
}

const TitleInput: React.FC<TitleInputProps> = ({
    placeholder,
}) => {

    const {register, formState} = useFormContext<{ title: string }>()

    return (
        <div>
            <InputLabel label="Title" required={true}/>
            <BaseInput placeholder={placeholder}
                       error={formState.errors.title?.message}
                       {...register("title", {
                           required: {
                               value: true,
                               message: "Title is required."
                           },
                           maxLength: {
                               value: 50,
                               message: "Maximum title length is 50 characters"
                           }
                       })}
            />
        </div>
    );
};

export default TitleInput