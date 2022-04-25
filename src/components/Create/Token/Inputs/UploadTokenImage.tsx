import React, {memo, useCallback} from 'react';
import {InputLabel} from "../../../../@UI/Forms";
import UploadImage from "../../Common/Upload/UploadImage";
import {useFormContext} from "react-hook-form";
import {ImageInput} from "../../../../@types/Form";

const UploadTokenImage: React.FC = () => {

    const {register, formState, resetField, watch, setValue} = useFormContext<{ media: ImageInput }>()

    const reset = useCallback(() => {
        resetField("media")
    }, [resetField])

    const url = watch("media.url")

    return (
        <div>
            <InputLabel label="Upload artwork file" required={true}/>
            <UploadImage wrapperClasses="w-[300px] h-[300px] rounded-xl"
                         url={url}
                         reset={reset}
                         error={formState?.errors?.media?.file?.message}
                         imageInputProps={
                             register("media.file", {
                                 onChange: event => {
                                     const files = event.target.files
                                     if (files && files.length !== 0) {
                                         const file = files[0]
                                         setValue("media.file", file)
                                         setValue("media.url", URL.createObjectURL(file))
                                     }
                                 }
                             })
                         }
            />
        </div>
    );
};

export default memo(UploadTokenImage);