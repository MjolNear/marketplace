import React from 'react';
import {Optional} from "../../../business-logic/models/types";

interface PropTypes {
    bannerLink?: Optional<string>
}

const CollectionBanner = React.memo<PropTypes>(({bannerLink}) => {
    if (!bannerLink) {
        return <></>
    }
    return (
        <img className="w-full h-[250px] object-cover object-top"
             alt="loading..."
             src={`https://ipfs.io/${bannerLink.replace(":/", "")}`
        }
        />
    );
});

export default CollectionBanner;