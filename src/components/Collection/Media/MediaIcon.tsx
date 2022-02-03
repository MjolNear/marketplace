import React from 'react';
import {IconType} from 'react-icons';
import {Link} from "react-router-dom";

interface PropTypes {
    link: string
    Icon: IconType
}

const MediaIcon = React.memo<PropTypes>(({link, Icon}) => {
    return (
        <Link to={link}>
            <div className="p-3 group rounded-lg hover:bg-blue-400">
                <Icon size={25} className="group-hover:fill-white"/>
            </div>
        </Link>
    );
});

export default MediaIcon;