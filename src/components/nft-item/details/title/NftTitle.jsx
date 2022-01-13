import React from 'react';
import {Link} from "react-router-dom";

const NftTitle = React.memo(({title, previewLink}) => {
    return (
        <Link
            to={previewLink}
            className="font-bold text-mjol-purple-dark truncate text-md">
            {title}
        </Link>
    );
});

export default NftTitle;