import React, {useCallback} from 'react';
import UploadImageBlock from "./Upload/UploadImageBlock";
import QuestionIcon from "../../Icons/QuestionIcon";
import {useFormContext} from "react-hook-form";

interface UploadImageProps {
    label: string,
}

const UploadImage: React.FC<UploadImageProps> = ({
    label
}) => {

    const {register, formState, resetField, watch, setValue} = useFormContext<{
        media: {
            file?: File,
            url: string
        }
    }>()

    const clearImage = useCallback(() => {
        resetField("media")
    }, [resetField])

    const url = watch("media.url")

    return (
        <div>
            <div className="text-[15px] font-bold text-gray-700">
                <div>
                    <b className="font-black text-red-500">*</b>
                    <div className="inline-flex gap-2 items-center">
                        {label}
                        <QuestionIcon dataFor="mintTokenUploadMediaInfoId"
                                      dataHTML={true}
                                      dataTip={`
                                               <div>
                                                  <div>Please upload image preview for your artwork.</div>
                                                  It will be visible in NFT cards on the Explore NFTs page and similar.
                                                </div>
                                             `}/>
                    </div>
                </div>
                {url
                    ?
                    <div className="mt-1 p-2 md:w-[380px] md:h-[300px] relative
                                    border-2 border-gray-300 border-dashed rounded-xl"
                    >
                        <div className="h-full w-full relative overflow-hidden flex items-center justify-center">
                            <img src={url}
                                 alt="loading.."
                                 className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <button type="button"
                                className="-top-3 -right-3 bg-gray-900 text-white absolute z-[50]
                                           rounded-full hover:bg-gray-500 cursor-pointer"
                                onClick={clearImage}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    :
                    <UploadImageBlock error={formState.errors.media?.file?.message}
                                      {...register("media.file", {
                                          required: {
                                              value: true,
                                              message: "Media is required"
                                          },
                                          onChange: event => {
                                              const files = event.target.files
                                              if (files && files.length !== 0) {
                                                  const file = files[0]
                                                  setValue("media.file", file)
                                                  setValue("media.url", URL.createObjectURL(file))
                                              }
                                          }
                                      })}/>
                }
            </div>
        </div>
    )
};

export default UploadImage;