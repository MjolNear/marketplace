import React from 'react';
import SquareImageBlock from "./Blocks/SquareImageBlock";
import MintedBlock from "./Blocks/MintedBlock";
import TitleBlock from "./Blocks/TitleBlock";
import CollectionBlock from "./Blocks/CollectionBlock";
import PriceBlock from "./Blocks/PriceBlock";
import {Link} from "react-router-dom";
import {Optional} from "../../business-logic/models/types";
import {ContractVerificationStatus} from "../../business-logic/models/contract";

interface CardProps {
    contractId: string,
    tokenId: string
    title: string,
    media?: Optional<string>,
    price?: Optional<string>,
    mintedSiteName: string,
    mintedSiteLink: string,
    verification: ContractVerificationStatus
}

const Card: React.FC<CardProps> = ({
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
    return (
        <div className="flex flex-col justify-between overflow-hidden w-full rounded-xl
                        ring-1 ring-blue-300 select-none
                        transform hover:shadow-mjol-blue-300-md hover:-translate-y-[1px]"
        >
            <div>
                <Link to={previewLink}>
                    <SquareImageBlock path={media}/>
                </Link>
                <div className="px-2 xxs:px-5 mt-2">
                    <Link to={previewLink}>
                        <TitleBlock title={title}/>
                    </Link>
                </div>
            </div>
            <div className="px-2 xxs:px-5">
                <div className="mb-3">
                    <CollectionBlock name="Mock collection"/>
                </div>
                <MintedBlock mintedSiteName={mintedSiteName}
                             mintedSiteLink={mintedSiteLink}
                             verification={verification}
                />
                <PriceBlock price={price}/>
            </div>
        </div>
    );
};

export default Card;