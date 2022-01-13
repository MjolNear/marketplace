import React, {useState} from 'react';
import MjolLoader from "../../../ui/loaders/MjolLoader";

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
                    <MjolLoader/>
                </div>
            }
        </div>
    );
};

export default NftImage;