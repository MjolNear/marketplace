import React from 'react';
import {Link} from "react-router-dom";
import classNames from "../../utils";

const DarkButton = ({link, title, isActive, onClick}) => {

    return (
        <Link to={link} onClick={onClick}
              className={classNames(isActive
                      ? "bg-gradient-to-br from-light_blue to-green-200"
                      : "bg-gradient-to-br from-white to-white ring-1 ring-inset ring-black hover:to-black hover:from-black",
                  "group rounded-3xl pl-5 pr-5 pt-2 pb-2")}
        >
            <div className="text-black text-extrabold text-md lg:text-xl font-mono group-hover:text-white">
                {title}
            </div>
        </Link>
    );
};

export default DarkButton;