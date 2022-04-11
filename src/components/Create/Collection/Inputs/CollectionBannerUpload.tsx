import React, {useCallback} from 'react';
import {useFormContext} from "react-hook-form";
import InputLabel from "../../../Common/Forms/InputLabel";
import UploadImage from "../../Common/Upload/UploadImage";
import {ImageInput} from "../../../../business-logic/types/form";

const CollectionBannerUpload = () => {
    const {register, formState, resetField, watch, setValue} = useFormContext<{ banner: ImageInput }>()

    const reset = useCallback(() => {
        resetField("banner")
    }, [resetField])

    const url = watch("banner.url")

    return (
        <div>
            <InputLabel label="Banner image"
                        description="This image will be used at top of your collection on preview page. 1200 x 300 recommended."
            />
            <UploadImage wrapperClasses="w-full aspect-w-4 aspect-h-1 min-h-[150px] rounded-lg"
                         url={url}
                         reset={reset}
                         error={formState?.errors?.banner?.file?.message}
                         imageInputProps={
                             register("banner.file", {
                                 onChange: event => {
                                     const files = event.target.files
                                     if (files && files.length !== 0) {
                                         const file = files[0]
                                         setValue("banner.file", file)
                                         setValue("banner.url", URL.createObjectURL(file))
                                     }
                                 }
                             })
                         }
            />
        </div>
    )
};

export default CollectionBannerUpload;