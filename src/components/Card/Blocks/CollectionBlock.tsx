import React from 'react';
import {Link} from "react-router-dom";
import {Img} from "react-image";
import CircleIconLoader from "../../Common/Loaders/CircleIconLoader";
import {CardSize, useCardSize} from "../../../context/CardSizeContext";
import classNames from '../../../utils/css-utils';


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
    const size = useCardSize()
    return (
        <>
            {data &&
                <Link to={`/collections/${data.collectionId}`}
                      className="flex items-center gap-1">
                    <Img src={data.image}
                         alt={data.title}
                         className={
                             classNames("rounded-full",
                                 size === CardSize.Big ? "h-4 w-4" : "h-3 w-3")
                         }
                         loader={<CircleIconLoader size={size === CardSize.Big ? 16 : 12}/>}
                    />
                    <div
                        className={classNames(
                            "font-bold font-archivo truncate text-gray-800 opacity-75 " +
                            "hover:opacity-90 hover:underline",
                            size === CardSize.Big ? "text-[13px]" : "text-[10px]"
                        )}
                    >
                        {data.title}
                    </div>
                </Link>
            }
        </>
    );
};

export default CollectionBlock;