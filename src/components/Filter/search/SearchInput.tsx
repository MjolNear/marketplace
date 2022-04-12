import React, {useCallback} from 'react';
import {FaSearch} from 'react-icons/fa'

interface SearchInputProps {
    searchQueryText: string,
    setSearchQueryText: React.Dispatch<React.SetStateAction<string>>
    placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
    searchQueryText,
    setSearchQueryText,
    placeholder = undefined,
}) => {

    const setSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQueryText(e.target.value)
    }, [setSearchQueryText])

    return (
        <div className="flex text-xs xs:text-md transition-all focus-within:shadow-mjol-gray focus-within:bg-mjol-hover
                        ring-blue-200 ring-[1px] rounded-3xl overflow-hidden items-center px-5 py-1"
        >
            <FaSearch size={18} className="fill-blue-400 mr-2"/>
            <input className="w-full xxs:w-64 xs:w-72 sm:w-80
                              bg-transparent
                              outline-none border-0 outline-none border-0
                              focus:ring-0
                              text-[12px] xs:text-[13px]
                              font-semibold
                              "
                   type="text"
                   placeholder={placeholder}
                   value={searchQueryText}
                   onChange={setSearch}
            />
        </div>
    );
};

export default SearchInput;