import React from 'react';
import {Collection} from "../../business-logic/models/collection";
import ImageBlock from "../Card/Blocks/ImageBlock";

interface PropTypes {
    collection: Collection
}

const CollectionCard: React.FC<PropTypes> = ({collection}) => {

    const previewLink = `/collections/${collection.collection_id}`

    return (
        <a className="flex flex-col justify-start rounded-2xl
                      ring-1 ring-blue-300 select-none overflow-hidden
                      bg-white group
                      transform hover:bg-blue-600
                      "
           href={previewLink}
        >
            <ImageBlock path={collection.media} objectFit="fill" className="bg-white rounded-2xl"/>
            <div className="flex flex-col p-1 justify-between w-full">
                <div className="font-black font-archivo text-2xl text-center group-hover:text-white">
                    {collection.title}
                </div>
                <div className="w-full space-y-1 px-2 pt-1">
                    <div
                        className="font-bold font-archivo text-sm opacity-80 max-h-[50px] text-center overflow-hidden text-clip break-words group-hover:text-white"
                    >
                        {collection.desc.length === 0
                            ? "Collection has no description"
                            : collection.desc
                        }
                    </div>
                    <hr/>
                    <div className="w-full font-bold font-archivo text-right text-tiny-4 pr-2 group-hover:text-white">
                        {collection.owner_id}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default CollectionCard;