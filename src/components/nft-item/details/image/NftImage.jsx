import React, {useState} from 'react';
import ImageLoader from "../../../ui/loaders/ImageLoader";

const NftImage = ({path}) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className="aspect-w-1 aspect-h-1 justify-center">
            <img src={path}
                 alt="media not supported"
                 className={"object-contain " + (loading ? "hidden" : "")}
                 onLoad={() => setLoading(false)}
            />
            {loading &&
                <div className="flex items-center justify-center">
                    <ImageLoader/>
                </div>
            }
        </div>
    );
};

export default NftImage;