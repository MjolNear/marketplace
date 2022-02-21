import React from 'react';
import {IconType} from 'react-icons';
import {Link} from "react-router-dom";

interface PropTypes {
    link: string
    Icon: IconType
}

const MediaIcon = React.memo<PropTypes>(({link, Icon}) => {
    return (
        <div className="cursor-not-allowed">
            <div className="p-3 group rounded-lg">
                <Icon size={25} className=""/>
            </div>
        </div>
    );
});

export default MediaIcon;