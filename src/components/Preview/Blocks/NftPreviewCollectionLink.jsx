import React from 'react';
import {Link} from "react-router-dom";
import ShareIcon from "../../Icons/ShareIcon";

const NftPreviewCollectionLink = React.memo(({name, link}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="text-md md:text-lg font-bold text-mjol-purple-dark-t hover:bg-opacity-80 text-center">
                <Link to={link}>{name}</Link>
            </div>
            <ShareIcon/>
        </div>
    );
});

export default NftPreviewCollectionLink;