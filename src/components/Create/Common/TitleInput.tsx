import React from 'react';
import BaseInput from "../../../@UI/Forms/BaseInput";
import InputLabel from "../../../@UI/Forms/InputLabel";
import {useFormContext} from "react-hook-form";


interface TitleInputProps {
    placeholder: string,
    maxChars?: number
}

const TitleInput: React.FC<TitleInputProps> = ({
    placeholder,
    maxChars = 50
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
                               value: maxChars,
                               message: `Maximum title length is ${maxChars} characters`
                           }
                       })}
            />
        </div>
    );
};

export default TitleInput