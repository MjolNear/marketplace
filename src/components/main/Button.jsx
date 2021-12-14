import React from 'react';
import {Link} from "react-router-dom";

const LinkDivButton = ({path, name}) => {
    return (
        <Link to={path}>
            <div>
                {name}
            </div>
        </Link>
    );
};

export default LinkDivButton;