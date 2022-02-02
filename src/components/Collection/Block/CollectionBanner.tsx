import React from 'react';
import {Optional} from "../../../business-logic/models/types";

interface PropTypes {
    link: Optional<string>
}

const CollectionBanner: React.FC<PropTypes> = ({link}) => {
    return (
        <div className="rounded-lg">
            {link === null
                ? <div className="bg-gray-300"/>
                : <img src={link}/>
            }
        </div>
    );
};

export default CollectionBanner;