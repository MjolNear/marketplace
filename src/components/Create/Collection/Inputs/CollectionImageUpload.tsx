import React, {useCallback} from 'react';
import InputLabel from "../../../Common/Forms/InputLabel";
import UploadImage from "../../Common/Upload/UploadImage";
import {useFormContext} from "react-hook-form";
import {ImageInput} from "../../../../@types/Form";

const CollectionImageUpload: React.FC = () => {

    const {register, formState, resetField, watch, setValue} = useFormContext<{ media: ImageInput }>()

    const reset = useCallback(() => {
        resetField("media")
    }, [resetField])

    const url = watch("media.url")

    return (
        <div>
            <InputLabel label="Card and Logo image"
                        required={true}
                        description="This image will be used as collection card and logo. 300 x 300 recommended."
            />
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

export default CollectionImageUpload;