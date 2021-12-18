import React from 'react';
import {Link} from "react-router-dom";

const DarkButton = ({link, title}) => {
    return (
        <Link to={link} className="rounded-3xl pl-5 pr-5 pt-2 pb-2
                bg-gradient-to-br from-light_blue to-green-200
                xs:from-white xs:to-white xs:ring-1 xs:ring-black
                hover:from-light_blue hover:to-green-200 hover:ring-0
                "
        >
            <div className="text-black text-extrabold text-md lg:text-xl font-mono">
                {title}
            </div>
        </Link>
    );
};

export default DarkButton;