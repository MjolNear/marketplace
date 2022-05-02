import React from 'react';
import {CollectionId, ContractId, Optional, TokenId} from "../../../@types/Aliases";
import {Img} from "react-image";
import RectLoader from "../../../@ui/Loaders/RectLoader";
import {Link} from "react-router-dom";
import brokenImage from "../../../resources/broken-image.png";

interface ActivityTokenCellProps {
    tokenId: TokenId
    contractId: ContractId
    title: string
    media?: Optional<string>
    collectionId: CollectionId
    collectionName: string
}

const ActivityTokenCell: React.FC<ActivityTokenCellProps> = ({
    tokenId,
    contractId,
    title,
    media,
    collectionId,
    collectionName
}) => {
    const path = `/nfts/${contractId}/${tokenId}`

    return (
        <div className="flex col-span-3 lg:col-span-2 items-center font-archivo text-sm md:text-md">
            <Link to={path}
                  className="rounded-lg overflow-hidden hover:opacity-60">
                <Img src={media || ''}
                     className="object-contain w-[60px] h-[60px]"
                     alt={title}
                     loader={<RectLoader width={60} height={60}/>}
                     unloader={
                         <div className="flex items-center justify-center w-[60px] ring-1 ring-gray-300">
                             <img src={brokenImage} alt="not found" className="object-contain w-[40px]"/>
                         </div>
                     }
                />
            </Link>
            <div className="flex flex-col pl-4">
                <Link to={path}
                      className="font-bold truncate hover:underline"
                >
                    {title}
                </Link>
                <Link to={`/collections/${collectionId}`}
                      className="text-[12px] truncate text-gray-700 hover:underline"
                >
                    {collectionName}
                </Link>
            </div>
        </div>
    )
}

export default ActivityTokenCell;