import React, {memo} from 'react';
import BaseInput, {NoRefInputProps} from "../../Common/Forms/BaseInput";
import InputLabel from "../../Common/Forms/InputLabel";


interface TitleInputProps {
    inputProps: NoRefInputProps
    error?: string
    placeholder: string
}

const TitleInput: React.FC<TitleInputProps> = ({
    inputProps,
    error,
    placeholder,
}) => {
    return (
        <div>
            <InputLabel label="Title" required={true}/>
            <BaseInput placeholder={placeholder}
                       error={error}
                       {...inputProps}
            />
        </div>
    );
};

export default memo(TitleInput)