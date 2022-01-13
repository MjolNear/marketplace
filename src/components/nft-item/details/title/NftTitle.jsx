import React from 'react';
import {Link} from "react-router-dom";

const NftTitle = React.memo(({title, previewLink}) => {
    return (
        <Link
            to={previewLink}
            className="font-black text-mjol-purple-dark truncate text-lg">
            {title}
        </Link>
    );
});

export default NftTitle;