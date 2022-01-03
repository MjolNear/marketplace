import React from 'react';
import {Link} from "react-router-dom";

const NftImage = ({path, previewLink}) => {
    return (
        <div className="p-2 space-y-1">
            <div className="xs:h-72 2xl:h-80 grid place-items-center">
                <Link to={previewLink}>
                    <img src={path}
                         alt="not found...😔"
                         className="rounded-2xl xs:max-h-72 2xl:max-h-80"
                    />
                </Link>
            </div>
        </div>
    );
};

export default NftImage;