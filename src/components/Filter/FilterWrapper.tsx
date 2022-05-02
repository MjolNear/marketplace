import React from 'react';

const FilterWrapper: React.FC = ({
    children
}) => {
    return (
        <div className="px-2 flex flex-row flex-wrap gap-5 justify-center mb-2 w-full">
            {children}
        </div>
    );
};

export default FilterWrapper;