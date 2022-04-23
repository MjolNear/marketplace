import React from 'react';
import {Link} from "react-router-dom";
import classNames from "../../../utils/css-utils";
import AnimatedBlueUnderline from "../Animation/AnimatedBlueUnderline";

interface LinkPropTypes {
    to: string,
    text: string,
    isActive: boolean
}

const BlueAnimatedLink = React.memo<LinkPropTypes>(({
    to,
    text,
    isActive
}) => {

    return (
        <Link to={to}
              className={
                  classNames("flex flex-col gap-1",
                      isActive ? "text-mjol-secondary-selected" : "hover:text-mjol-secondary-selected text-mjol-secondary",
                  )}
        >
            <div className="px-2">
                {text}
            </div>
            <AnimatedBlueUnderline isActive={isActive}/>
        </Link>
    );
});

export default BlueAnimatedLink;