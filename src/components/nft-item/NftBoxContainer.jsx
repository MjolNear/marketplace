import React from 'react';
import {Link} from "react-router-dom";


const NftBoxContainer = ({children, previewLink}) => {
    return (
        <div className="group flex flex-col justify-between rounded-3xl ring-2 ring-super-light-blue
                        shadow-light-blue bg-white hover:shadow-purple hover:ring-indigo-400">
            <Link to={previewLink}>
                {children}
            </Link>
        </div>
    );
};

export default NftBoxContainer;