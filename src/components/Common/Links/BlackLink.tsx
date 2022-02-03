import React from 'react';
import {Link} from "react-router-dom";
import classNames from "../../../utils/css-utils";

interface LinkPropTypes {
    to: string,
    text: string,
    isActive: boolean
}

const BlackLink = React.memo<LinkPropTypes>(({to, text, isActive}) => {

    return (
        <Link to={to}
              className={
                  classNames("text-black hover:opacity-100 flex flex-col gap-1",
                      isActive ? "opacity-100" : "opacity-60",
                  )}
        >
            <div className="px-5">
                {text}
            </div>
            {isActive && <div className="h-[2px] bg-blue-500 rounded-t-[2px]"/>}
        </Link>
    );
});

export default BlackLink;