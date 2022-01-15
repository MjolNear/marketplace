import React, {useState} from 'react';
import MjolLoader from "../Common/loaders/MjolLoader";

const PreviewNftImage = ({link}) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className="justify-self-center md:justify-self-end w-full max-w-2xl">
            <img src={link}
                 alt="media not supported"
                 className="w-full max-h-xl object-contain"
                 onLoad={() => setLoading(false)}
            />
            {loading && <MjolLoader width={60} height={60}/>}
        </div>
    );
};

export default PreviewNftImage;