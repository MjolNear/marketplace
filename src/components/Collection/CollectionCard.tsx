import React from 'react';
import {Collection} from "../../business-logic/models/collection";

interface PropTypes {
    collection: Collection
}

const CollectionCard: React.FC<PropTypes> = ({collection}) => {
    return (
        <a className="flex flex-col justify-start rounded-2xl
                      ring-1 ring-blue-300 select-none bg-white overflow-hidden
                      transform hover:shadow-mjol-medium-blue-all-xs items-center
                      "
           href={`/collections/${collection.collection_id}`}
        >
            <div className="w-full aspect-h-1 aspect-w-1">
            <div className="w-full h-full bg-gradient-to-br from-mjol-white to-cyan-200 blur-2xl"/>
            </div>
            <img className="rounded-full w-11/12 absolute"
                 src={collection.media}
                 style={{
                     top: 20,
                     aspectRatio: "1/1"
                 }}
                 alt="loading..."/>
            <div className="flex flex-col p-1 justify-between w-full h-full z-10 bg-gray-900 bg-opacity-5">
                <div className="space-y-2 w-full h-full">
                    <div className="font-black font-archivo text-2xl text-center">{collection.title}</div>
                </div>
                <div className="w-full space-y-1 px-2 pt-1">
                    <div
                        className="font-bold font-archivo text-sm opacity-70 max-h-[50px] text-center overflow-hidden text-clip break-words">{collection.desc.length === 0 ?
                        "Collection has no description" : collection.desc
                    }</div>
                    <hr/>
                    <div className="w-full font-bold font-archivo text-right text-tiny-4 pr-2"
                    >
                        {collection.owner_id}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default CollectionCard;