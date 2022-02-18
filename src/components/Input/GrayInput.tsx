import React from 'react';

interface InputProps {
    value: string | number | undefined
}

const GrayInput: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps> = ({
    value,
    ...props
}) => {
    return (
        <div className="px-[8px] min-h-[48px] ring-gray-200 ring-[1px] rounded-lg w-full">
            <input className="w-full rounded-lg outline-none border-0 h-full focus:ring-0 text-sm"
                   value={value}
                   {...props}
            />
        </div>
    );
};

export default GrayInput;