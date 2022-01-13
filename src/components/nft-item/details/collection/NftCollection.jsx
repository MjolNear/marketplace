import React from 'react';
import {Link} from "react-router-dom";

const NftCollection = React.memo(({collectionName, collectionLink}) => {
    return (
        <Link className="text-xs-2 font-semibold truncate text-mjol-purple-dark-t hover:underline"
              to={collectionLink}
        >
            {collectionName}
        </Link>
    );
});

export default NftCollection;