import React from 'react';
import {FaSearch} from 'react-icons/fa'

const SearchInput = ({placeholder, isTyping, onCancel, onSearch}) => {
    return (
        <div className="flex text-xs xs:text-md">
            <input className="rounded-l-3xl w-full sm:w-88 outline-none py-2 px-5 ring-1 ring-inset ring-blue-100"
                   placeholder={placeholder}
            />
            <div className="rounded-r-3xl px-5 bg-mjol-blue-base grid place-items-center cursor-pointer">
                <FaSearch color="white"/>
            </div>
        </div>
    );
};

export default SearchInput;