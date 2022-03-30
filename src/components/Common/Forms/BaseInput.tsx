import React from 'react';
import classNames from "../../../utils/css-utils";
import {BiErrorCircle} from 'react-icons/bi'

export type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type NoRefInputProps = Omit<ReactInputProps, 'ref'>
export type BaseInputProps = ReactInputProps & { error?: string }

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(({
        error, children,
        ...inputProps
    },
    ref
) => {
    return (
        <div className="font-archivo flex flex-col justify-start w-full">
            <div className="items-center inline-flex gap-3 w-full">
                <div className={
                    classNames("w-full transition-all focus-within:shadow-mjol-gray " +
                        "focus-within:bg-mjol-hover rounded-lg overflow-hidden ring-gray-300 ring-[1px]",
                        error ? "ring-red-400" : "ring-gray-300"
                    )}
                >
                    <input ref={ref}
                           className="w-full outline-none border-0 bg-transparent px-4 my-3
                                 focus:ring-0 font-archivo font-semibold text-xs-2 xs:text-sm"
                           {...inputProps}
                    />
                </div>
                {children}
            </div>
            {error &&
                <div className="text-red-500 text-[13px] mt-3 ml-1 inline-flex gap-2 items-center">
                    <BiErrorCircle className="fill-red-500" size={18}/>
                    {error}
                </div>
            }
        </div>
    );
});

export default BaseInput;