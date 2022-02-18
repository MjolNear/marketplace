import React from 'react';
import {FaSearch} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

interface SearchInputProps {
    searchQueryText: string,
    setSearchQueryText: React.Dispatch<React.SetStateAction<string>>,
    placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
    searchQueryText,
    setSearchQueryText,
    placeholder = undefined,
}) => {
    return (
        <div className="flex text-xs xs:text-md">
            <input className="rounded-l-3xl w-full sm:w-88
                              outline-none border-0 py-[12px] px-5 ring-1 ring-inset ring-mjol-light-blue
                              focus:ring-mjol-light-blue
                              focus:ring-inset
                              focus:bg-gray-50
                              "
                   type="text"
                   placeholder={placeholder}
                   value={searchQueryText}
                   onChange={e => setSearchQueryText(e.target.value)}
            />
            <div className="rounded-r-3xl w-[60px]
                            bg-gradient-to-r from-mjol-light-blue to-blue-700
                            hover:to-blue-600
                            grid place-items-center cursor-pointer">
                {
                    searchQueryText
                        ?
                        <IoClose size={22}
                                 className="fill-white"
                                 onClick={() => setSearchQueryText('')}
                        />
                        :
                        <FaSearch color="white"/>
                }
            </div>
        </div>
    );
};

export default SearchInput;