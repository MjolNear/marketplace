import React, {useState} from 'react';
import MjolLoader from "../../Common/loaders/MjolLoader";
import {Link} from "react-router-dom";

const ImageBlock = ({path, previewLink}) => {

    const [loading, setLoading] = useState(true)

    return (
        <Link to={previewLink}>
            <div className="aspect-w-1 aspect-h-1 justify-center">
                <img src={path}
                     alt="media not supported"
                     className={"object-contain" + (loading ? "hidden" : "")}
                     onLoad={() => setLoading(false)}
                />
                {loading &&
                    <div className="flex items-center justify-center">
                        <MjolLoader/>
                    </div>
                }
            </div>
        </Link>
    );
};

export default ImageBlock;