import React from 'react';
import CardImage from "./Blocks/CardImage";
import MintedBlock from "./Blocks/MintedBlock";
import TitleBlock from "./Blocks/TitleBlock";
import CollectionBlock from "./Blocks/CollectionBlock";
import CardPrice from "./Blocks/CardPrice";
import {Link} from "react-router-dom";
import {Optional} from "../../business-logic/types/aliases";
import {ContractVerificationStatus} from "../../business-logic/types/contract";
import {useFetchTokenCollection} from "../../hooks/collection/useFetchTokenCollection";
import {CardSize, useCardSize} from "../../context/CardSizeContext";
import classNames from "../../utils/css-utils";

interface TCardProps {
    contractId: string,
    tokenId: string
    title: string
    media?: Optional<string>
    price?: Optional<string>
    mintedSiteName: string
    mintedSiteLink: string
    extra?: Optional<string>
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
    extra,
    verification,
}) => {
    const previewLink = `/nfts/${contractId}/${tokenId}`
    const collection = useFetchTokenCollection(contractId, extra)
    const size = useCardSize()
    return (
        <div className={classNames(
            "flex flex-col justify-between overflow-hidden w-full ring-1 ring-blue-300" +
            " select-none transform transition hover:shadow-mjol-blue hover:-translate-y-[2px]",
            size === CardSize.Big ? "rounded-xl" : "rounded-lg"
        )}
        >
            <div>
                <Link to={previewLink}>
                    <CardImage url={media}/>
                </Link>
                <div className={size === CardSize.Big ? "px-2 xxs:px-5 mt-2" : "px-2 mt-1"}>
                    <Link to={previewLink}>
                        <TitleBlock title={title}/>
                    </Link>
                </div>
            </div>
            <div className={size === CardSize.Big ? "px-2 xxs:px-5" : "px-2"}>
                <CollectionBlock data={collection.data}/>
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