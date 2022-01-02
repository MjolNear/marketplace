import React from 'react';
import classNames from "../../../utils/css-utils";

const DarkButton = ({title, isActive, onClick}) => {

    return (
        <button onClick={onClick}
                className={classNames(isActive
                        ? "bg-gradient-to-br from-light_blue to-green-200"
                        : "bg-gradient-to-br from-white to-white ring-1 ring-inset ring-black hover:to-black hover:from-black",
                    "group rounded-3xl pl-5 pr-5 pt-2 pb-2")}
        >
            <div className={classNames(!isActive
                    ? "group-hover:text-white"
                    : "",
                "text-black text-extrabold text-md lg:text-xl font-mono")
            }>
                {title}
            </div>
        </button>
    );
};

export default DarkButton;