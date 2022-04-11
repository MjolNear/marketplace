import React from 'react';
import CardImage from "../Card/Blocks/CardImage";
import {Link} from "react-router-dom";
import DarkBlueMjolText from "../Common/Text/DarkBlueMjolText";
import {ContractId, AccountId, Optional,} from "../../business-logic/types/aliases";
import {prettyAccount, shortenString} from "../../utils/string";

interface TCollectionCardProps {
    ownerId: AccountId,
    contractId: ContractId,
    collectionId: string,
    title?: string,
    description?: Optional<string>,
    media?: Optional<string>
}

const CollectionCard: React.FC<TCollectionCardProps> = ({
    ownerId,
    contractId,
    collectionId,
    title,
    description,
    media
}) => {

    const itemPreviewLink = `/collections/${contractId}/${collectionId}/items`

    return (
        <Link className="flex flex-col justify-start bg-white rounded-2xl
                      ring-1 ring-blue-300 select-none overflow-hidden
                      transform transition-all hover:shadow-mjol-blue hover:-translate-y-[2px]"
              to={itemPreviewLink}
        >
            <CardImage url={media} objectFit="fill" className="bg-white rounded-2xl"/>
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
                              classes="w-full font-archivo text-tiny-4 pr-4 mb-0.5 text-right font-bold"/>
        </Link>
    );
};

export default CollectionCard;