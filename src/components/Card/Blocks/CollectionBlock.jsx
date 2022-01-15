import React from 'react';
import {Link} from "react-router-dom";

const CollectionBlock = React.memo(({collectionName, collectionLink}) => {
    return (
        <Link className="text-xs-2 font-semibold truncate text-mjol-purple-dark-t"
              to={collectionLink}
        >
            {collectionName}
        </Link>
    );
});

export default CollectionBlock;