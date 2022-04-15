import React from 'react';
import {Link} from "react-router-dom";
import {Img} from "react-image";
import CircleIconLoader from "../../Common/Loaders/CircleIconLoader";

interface TCollectionBlockProps {
    data?: {
        collectionId: string
        title: string
        image: string
    }
}

const CollectionBlock: React.FC<TCollectionBlockProps> = ({
    data
}) => {
    return (
        <>
            {data &&
                <Link to={`/collections/${data.collectionId}/items`}
                      className="flex items-center gap-1">
                    <Img src={data.image}
                         alt={data.title}
                         className="h-4 w-4 rounded-full"
                         loader={<CircleIconLoader size={16}/>}
                    />
                    <div
                        className="text-[13px] font-bold font-archivo truncate text-gray-800 opacity-75
                                   hover:opacity-90 hover:underline"
                    >
                        {data.title}
                    </div>
                </Link>
            }
        </>
    );
};

export default CollectionBlock;