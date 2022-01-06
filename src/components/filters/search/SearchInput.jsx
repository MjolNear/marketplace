import React from 'react';
import {FaSearch} from 'react-icons/fa'

const SearchInput = ({placeholder, isTyping, onCancel, onSearch}) => {
    return (
        <div className="flex text-xs xs:text-md">
            <input className="rounded-l-3xl w-full sm:w-88
                              focus:outline-0 outline-none py-2 px-5 ring-1 ring-inset ring-blue-100"
                   placeholder={placeholder}
                   type="search"
            />
            <div className="rounded-r-3xl px-5 bg-gradient-to-b from-blue-400 to-blue-900 grid place-items-center cursor-pointer">
                <FaSearch color="white"/>
            </div>
        </div>
    );
};

export default SearchInput;