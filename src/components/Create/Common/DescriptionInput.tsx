import React, {memo} from 'react';
import InputLabel from "../../Common/Forms/InputLabel";
import BaseTextArea, {NoRefTextAreaProps} from "../../Common/Forms/BaseTextArea";

interface DescriptionInputProps {
    inputProps: NoRefTextAreaProps
    error?: string
    placeholder: string,
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
    inputProps,
    error,
    placeholder,
}) => {

    return (
        <div>
            <InputLabel label="Description"/>
            <BaseTextArea placeholder={placeholder}
                          error={error}
                          rows={4}
                          {...inputProps}
            />
        </div>
    );
};

export default memo(DescriptionInput);