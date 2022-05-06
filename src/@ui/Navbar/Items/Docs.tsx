import React from 'react';
import {NavbarSingleButton} from "../Common";
import {SiGitbook} from "react-icons/si";

const Docs = () => {
    return (
        <NavbarSingleButton>
            <a className="text-gray-600 group-hover:text-black opacity-100 text-md font-archivo font-bold"
               href="https://oleg-bobrov.gitbook.io/mjolnear/"
               target="_blank"
               rel="noreferrer"
            >
                Docs
            </a>
            <SiGitbook size={18} color="#64748b" className="group-hover:fill-black"/>
        </NavbarSingleButton>
    );
};

export default Docs;