import React from 'react';

interface TShareRowProps {
    icon: React.ReactNode
    text: string
}

const ShareRow: React.FC<TShareRowProps> = ({
    icon,
    text
}) => {
    return (
        <div
            className="flex flex-row items-center gap-4 p-3 w-full
                       transition-all hover:shadow-mjol-gray hover:bg-mjol-hover cursor-pointer"
        >
            {icon}
            {text}
        </div>
    );
};

export default ShareRow;