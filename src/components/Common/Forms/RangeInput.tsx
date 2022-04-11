import React from 'react';
import {ReactInputProps} from "./BaseInput";


const RangeInput = React.forwardRef<HTMLInputElement, ReactInputProps>((props, ref) => {
    return (
        <div className="grid grid-cols-3 gap-6">
                <input ref={ref}
                       {...props}
                       type="range"
                       defaultValue="1"
                       className="w-full h-3 bg-blue-100 appearance-none rounded-3xl cursor-pointer"
                />
        </div>
    );
});

export default RangeInput;