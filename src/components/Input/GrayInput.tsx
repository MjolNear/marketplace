import React from 'react';

interface InputProps {
    value: string | number | undefined
}

const GrayInput: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps> = ({
    value,
    ...props
}) => {
    return (
        <div className="px-2 min-h-[48px] focus-within:shadow-mjol-gray ring-gray-200 ring-[1px] rounded-lg w-full">
            <input className="w-full outline-none border-0 focus:ring-0 h-full text-sm focus:bg-mjol-hover"
                   value={value}
                   {...props}
            />
        </div>
    );
};

export default GrayInput;