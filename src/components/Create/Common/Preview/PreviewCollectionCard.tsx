import React from 'react';
import DarkBlueMjolText from "../../../Common/Text/DarkBlueMjolText";
import {Img} from "react-image";
import {prettyAccount} from "../../../../utils/string";

interface PreviewCollectionCardProps {
    title: string,
    ownerId: string
    mediaUrl: string
    description?: string
}

const PreviewCollectionCard: React.FC<PreviewCollectionCardProps> = ({
    title,
    ownerId,
    mediaUrl,
    description
}) => {
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-xl
                         ring-1 ring-blue-300 select-none w-full max-w-[280px]"
        >
            <div className="aspect-w-1 aspect-h-1 justify-center z-10">
                {mediaUrl
                    ? <Img src={mediaUrl} className="w-full h-full object-contain"/>
                    : <div className="w-full h-full bg-gray-50"/>
                }
            </div>
            <div className="flex flex-col pt-3 px-6 justify-between w-full">
                <div className="font-black font-archivo text-lg text-center truncate">
                    {title}
                </div>
                <div className="mt-1 mb-3 font-bold font-archivo text-tiny-5 opacity-80 text-center truncate">
                    {description && description.length !== 0
                        ? description
                        : "Collection has no description"
                    }
                </div>
            </div>
            <DarkBlueMjolText text={prettyAccount(ownerId)}
                              classes="w-full font-archivo text-tiny-4 pr-4 mb-0.5 text-right font-bold"
            />
        </div>
    );
};

export default PreviewCollectionCard;