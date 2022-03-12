import React from 'react';
import {Collection} from "../../business-logic/models/collection";
import SquareImageBlock from "../Card/Blocks/SquareImageBlock";
import {Link} from "react-router-dom";
import DarkBlueMjolText from "../Common/Text/DarkBlueMjolText";

interface PropTypes {
    collection: Collection
}

const CollectionCard: React.FC<PropTypes> = ({collection}) => {

    const previewLink = `/collections/${collection.collection_contract}/${collection.collection_id}/items`

    return (
        <Link className="flex flex-col justify-start bg-white rounded-2xl
                      ring-1 ring-blue-300 select-none overflow-hidden
                      transform hover:shadow-mjol-blue-300-md hover:-translate-y-[1px]"
              to={previewLink}
        >
            <SquareImageBlock path={collection.media} objectFit="fill" className="bg-white rounded-2xl"/>
            <div className="flex flex-col pt-3 px-6 justify-between w-full">
                <div className="font-black font-archivo text-xl text-center truncate">
                    {collection.title}
                </div>
                <div className="mt-1 mb-3 font-bold font-archivo text-tiny-5 opacity-80 text-center truncate">
                    {collection.desc.length === 0
                        ? "Collection has no description"
                        : collection.desc
                    }
                </div>
            </div>
            <DarkBlueMjolText text={collection.owner_id}
                              classes="w-full font-archivo text-tiny-4 pr-4 mb-0.5 text-right font-bold"
            />
        </Link>
    );
};

export default CollectionCard;