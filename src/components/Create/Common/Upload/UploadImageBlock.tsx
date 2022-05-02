import React from 'react';
import UploadMediaIcon from "../../../Icons/Forms/UploadMediaIcon";
import {NoRefInputProps} from "../../../../@ui/Forms/BaseInput";
import {BiErrorCircle} from "react-icons/bi";

const UploadImageBlock = React.forwardRef<HTMLInputElement, NoRefInputProps & { error?: string }>(
    (props, ref) => {
        const {error, ...inputProps} = props
        return (
            <>
                <div className="p-2 relative border-2 border-gray-300 border-dashed w-full h-full inherit-border-radius">
                    <div className="space-y-1 text-center flex flex-col items-center justify-center h-full w-full">
                        <div className="flex text-sm text-gray-600">
                            <label className="mx-auto cursor-pointer bg-white rounded-md font-medium
                                             text-blue-500 hover:text-indigo-500
                                             focus:outline-none
                                             focus-visible:ring-0"
                            >
                                <UploadMediaIcon/>
                                Upload image
                                <input {...inputProps}
                                       ref={ref}
                                       type="file"
                                       accept="image/gif, image/jpeg, image/png"
                                       className="sr-only"
                                />
                                <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                {error &&
                    <div className="text-red-500 text-[13px] mt-3 ml-1 inline-flex gap-2 font-medium items-center font-archivo">
                        <BiErrorCircle className="fill-red-500" size={18}/>
                        {error}
                    </div>
                }
            </>
        );
    });

export default UploadImageBlock;