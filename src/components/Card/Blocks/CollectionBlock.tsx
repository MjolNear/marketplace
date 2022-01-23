import React from 'react';
import {Link} from "react-router-dom";

interface PropTypes {
    name: string,
    link: string
}

const CollectionBlock = React.memo<PropTypes>(({name, link}) => {
    return (
        <Link className="text-xs-2 font-semibold truncate text-mjol-purple-dark opacity-75 hover:opacity-90"
              to={link}
        >
            {name}
        </Link>
    );
});

export default CollectionBlock;