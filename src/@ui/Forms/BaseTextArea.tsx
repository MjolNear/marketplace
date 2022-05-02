import React from 'react';
import {BiErrorCircle} from "react-icons/bi";
import classNames from "../../utils/css-utils";

export type ReactTextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
export type NoRefTextAreaProps = Omit<ReactTextAreaProps, 'ref'>

const BaseTextArea = React.forwardRef<HTMLTextAreaElement, ReactTextAreaProps & { error?: string }>((
    props, ref) => {
    const {error, ...textAreaProps} = props
    return (
        <div className="font-archivo">
            <textarea ref={ref}
                      className={classNames("rounded-lg focus:shadow-mjol-gray focus:bg-mjol-hover " +
                          "ring-[1px] px-4 py-3 ring-inset border-0 outline-none focus:ring-0 outline-none w-full bg-white  " +
                          "text-xs-2 xs:text-sm font-semibold",
                          error ? "ring-red-400" : "ring-gray-300"
                      )}
                      {...textAreaProps}
            />
            {error &&
                <div className="text-red-500 text-[13px] mt-3 ml-1 inline-flex gap-2 items-center">
                    <BiErrorCircle className="fill-red-500" size={18}/>
                    {error}
                </div>
            }
        </div>
    );
});

export default BaseTextArea;