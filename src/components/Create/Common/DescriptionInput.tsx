import React from 'react';
import InputLabel from "../../Common/Forms/InputLabel";
import BaseTextArea from "../../Common/Forms/BaseTextArea";
import {useFormContext} from "react-hook-form";

interface DescriptionInputProps {
    placeholder: string,
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
    placeholder,
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
                                  value: 200,
                                  message: "Maximum description length is 200 characters"
                              }
                          })}
            />
        </div>
    );
};

export default DescriptionInput