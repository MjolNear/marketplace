import React from 'react';
import {Link} from "react-router-dom";

interface PropTypes {
    title: string,
    previewLink: string
}

const TitleBlock = React.memo<PropTypes>(({title, previewLink}) => {
    return (
        <Link to={previewLink} className="font-bold text-mjol-purple-dark truncate text-md">
            {title}
        </Link>
    );
});

export default TitleBlock;