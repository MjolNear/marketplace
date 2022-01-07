import React from 'react';
import {Link} from "react-router-dom";
import ShareIcon from "../../../ui/icons/ShareIcon";

const CollectionLink = ({name, link}) => {
    return (
        <div className="flex flex-row justify-between">
            <div
                className="text-md md:text-lg font-bold text-mjol-purple-dark-t hover:underline text-center">
                <Link to={link}>{name}</Link>
            </div>
            <ShareIcon/>
        </div>
    );
};

export default CollectionLink;