import React from 'react';

const BaseActivityCell: React.FC = ({
    children
}) => {
    return (
        <div
            className="flex items-center font-archivo lg:w-full flex-shrink-0 h-full gap-2
                       lg:flex text-xs-2 md:text-sm lg:text-[15px] lg:text-base max-lg:justify-end"
        >
            {children}
        </div>
    );
};

export default BaseActivityCell;