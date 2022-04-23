import React from 'react';
import CardImage from "../Card/Blocks/CardImage";
import {Link} from "react-router-dom";
import DarkBlueMjolText from "../Common/Text/DarkBlueMjolText";
import {prettyAccount} from "../../utils/string";
import {GridCollection} from "../../@types/Collection";
import {CardSize, useCardSize} from "../../context/CardSizeContext";
import classNames from "../../utils/css-utils";


const CollectionCard: React.FC<GridCollection> = ({
    ownerId,
    collectionId,
    title,
    description,
    image
}) => {

    const itemPreviewLink = `/collections/${collectionId}`
    const size = useCardSize()
    return (
        <Link className={classNames(
            "flex flex-col justify-start bg-white overflow-hidden " +
            "ring-1 ring-blue-300 select-none transform transition-all " +
            "hover:shadow-mjol-blue hover:-translate-y-[2px]",
            size === CardSize.Big ? "rounded-xl" : "rounded-lg"
        )}
              to={itemPreviewLink}
        >
            <CardImage url={image}
                       objectFit="fill"
                       className="bg-white"
            />
            <div className={classNames(
                "flex flex-col justify-between w-full",
                size === CardSize.Big ? "pt-3 px-6" : "mt-2 px-3")}>
                <div className={classNames(
                    "font-black font-archivo text-center truncate",
                    size === CardSize.Big ? "text-lg" : "text-sm"
                )}>
                    {title}
                </div>
                <div className={classNames(
                    "font-bold font-archivo mt-1 opacity-80 text-center truncate",
                    size === CardSize.Big ? "text-tiny-5 mb-3" : "text-tiny-4 mb-2")}>
                    {description && description.length !== 0
                        ? description
                        : "Collection has no description"
                    }
                </div>
            </div>
            <DarkBlueMjolText text={prettyAccount(ownerId)}
                              classes={classNames(
                                  "w-full font-archivo pr-4 mb-0.5 text-right font-bold",
                                  size === CardSize.Big ? "text-tiny-4" : "text-tiny-3"
                              )}/>
        </Link>
    );
};

export default CollectionCard;