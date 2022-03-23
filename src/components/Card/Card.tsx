import React from 'react';
import CardImage from "./Blocks/CardImage";
import MintedBlock from "./Blocks/MintedBlock";
import TitleBlock from "./Blocks/TitleBlock";
import CollectionBlock from "./Blocks/CollectionBlock";
import CardPrice from "./Blocks/CardPrice";
import {Link} from "react-router-dom";
import {Optional} from "../../business-logic/models/types";
import {ContractVerificationStatus} from "../../business-logic/models/contract";
import {whitelistedCollections} from "../../business-logic/whitelisted.collections";

interface TCardProps {
    contractId: string,
    tokenId: string
    title: string,
    media?: Optional<string>,
    price?: Optional<string>,
    mintedSiteName: string,
    mintedSiteLink: string,
    verification: ContractVerificationStatus
}

const Card: React.FC<TCardProps> = ({
    tokenId,
    contractId,
    title,
    media,
    price,
    mintedSiteName,
    mintedSiteLink,
    verification
}) => {
    const previewLink = `/nfts/${contractId}/${tokenId}`
    const collection = whitelistedCollections[contractId]
    return (
        <div className="flex flex-col justify-between overflow-hidden w-full rounded-xl
                        ring-1 ring-blue-300 select-none
                        transform hover:shadow-mjol-blue-300-md hover:-translate-y-[1px]"
        >
            <div>
                <Link to={previewLink}>
                    <CardImage url={media}/>
                </Link>
                <div className="px-2 xxs:px-5 mt-2">
                    <Link to={previewLink}>
                        <TitleBlock title={title}/>
                    </Link>
                </div>
            </div>
            <div className="px-2 xxs:px-5">
                <div className="mb-3">
                    {collection &&
                        <Link to={`/collections/${contractId}/${collection.collectionId}/items`}>
                            <CollectionBlock name={collection.name}/>
                        </Link>
                    }
                </div>
                <MintedBlock mintedSiteName={mintedSiteName}
                             mintedSiteLink={mintedSiteLink}
                             verification={verification}
                />
                <CardPrice price={price}/>
            </div>
        </div>
    );
};

export default Card;