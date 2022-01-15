import React, {useState} from 'react';
import MjolLoader from "../../Common/loaders/MjolLoader";

interface PropTypes {
    path: string,
}

const ImageBlock: React.FC<PropTypes> = ({path}) => {

    const [loading, setLoading] = useState(true)

    return (
        <div className="aspect-w-1 aspect-h-1 justify-center">
            <img src={path}
                 alt="media not supported"
                 className={"object-contain"}
                 // onLoad={() => setLoading(false)}
            />
            {/*{loading &&*/}
            {/*    <div className="flex items-center justify-center">*/}
            {/*        <MjolLoader/>*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
};

export default ImageBlock;