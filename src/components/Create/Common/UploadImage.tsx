import React, {memo} from 'react';
import UploadImageBlock from "./Upload/UploadImageBlock";
import QuestionIcon from "../../Icons/QuestionIcon";
import {NoRefInputProps} from "../../Common/Forms/BaseInput";

interface UploadImageProps {
    text: string,
    url: string,
    mediaError?: string,
    clearImage: () => void,
    inputProps: NoRefInputProps
}

const UploadImage: React.FC<UploadImageProps> = ({
    text,
    url,
    mediaError,
    clearImage,
    inputProps
}) => {
    return (
        <div>
            <div className="text-[15px] font-bold text-gray-700">
                <div>
                    <b className="font-black text-red-500">*</b>
                    <div className="inline-flex gap-2 items-center">
                        {text}
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
                    <div className="flex justify-center items-center mt-1 px-6 py-1 md:w-[450px] md:h-[300px]
                                    border-2 border-gray-300 border-dashed rounded-lg"
                    >
                        <div className="relative">
                            <img src={url} alt="loading.." style={{objectFit: "cover"}}/>
                            <button type="button"
                                    className="top-0 right-0 -mx-2 -my-2 bg-gray-900 text-white absolute
                                               rounded-full hover:bg-gray-500 cursor-pointer"
                                    onClick={clearImage}
                            >
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    :
                    <UploadImageBlock error={mediaError} {...inputProps}/>
                }
            </div>
        </div>
    )
};

export default memo(UploadImage);