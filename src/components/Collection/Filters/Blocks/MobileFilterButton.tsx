import React, {MouseEventHandler} from 'react';
import {FilterIcon} from "@heroicons/react/solid";

interface PropTypes {
    onClick: MouseEventHandler
}

const MobileFilterButton: React.FC<PropTypes> = ({onClick}) => {
    return (
        <button type="button"
                className="md:hidden p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500"
                onClick={onClick}
        >
                        <span className="sr-only">
                            Traits
                        </span>
            <FilterIcon className="w-5 h-5" aria-hidden="true"/>
        </button>
    );
};

export default MobileFilterButton;