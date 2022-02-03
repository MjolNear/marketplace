import React from 'react';
import {Link} from "react-router-dom";
import classNames from "../../../utils/css-utils";
import {AnimatePresence, motion} from "framer-motion";
import AnimatedBlueUnderline from "../Animation/AnimatedBlueUnderline";

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
            <div className="px-5">{text}</div>
            <AnimatedBlueUnderline isActive={isActive}/>
        </Link>
    );
});

export default BlackLink;