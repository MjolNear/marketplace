import React from 'react';
import InputLabel from "../../../@ui/Forms/InputLabel";
import BaseTextArea from "../../../@ui/Forms/BaseTextArea";
import {useFormContext} from "react-hook-form";

interface DescriptionInputProps {
    placeholder: string,
    maxChars?: number
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
    placeholder,
    maxChars = 200
}) => {

    const {register, formState} = useFormContext<{ description: string }>()

    return (
        <div>
            <InputLabel label="Description"/>
            <BaseTextArea placeholder={placeholder}
                          error={formState.errors.description?.message}
                          rows={4}
                          {...register("description", {
                              maxLength: {
                                  value: maxChars,
                                  message:` "Maximum description length is ${maxChars} characters"`
                              }
                          })}
            />
        </div>
    );
};

export default DescriptionInput