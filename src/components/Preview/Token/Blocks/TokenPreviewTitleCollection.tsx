import React from 'react';
import {Link} from "react-router-dom";
import {getTokenCollection} from "../../../../business-logic/whitelisted.collections";
import {TokenCollectionMetadata} from "../../../../business-logic/types/nft";
import {Optional} from "../../../../business-logic/types/aliases";
import {useFetchCollectionData} from "../../../../hooks/collection/useFetchCollectionData";
import CircleIconLoader from "../../../Common/Loaders/CircleIconLoader";

interface TokenPreviewTitleCollection {
    title: string
    contractId: string
    collectionMeta?: Optional<TokenCollectionMetadata>
}

const TokenPreviewTitleCollection: React.FC<TokenPreviewTitleCollection> = ({
    title,
    contractId,
    collectionMeta
}) => {
    const tokenCollection = collectionMeta ? collectionMeta : getTokenCollection(contractId)

    const {collection, fetching} = useFetchCollectionData(contractId, tokenCollection?.collectionId)

    return (
        <section className="font-archivo">
            <div className="font-black text-2xl">
                {title}
            </div>
            {tokenCollection &&
                <Link to={`/collections/${contractId}/${tokenCollection.collectionId || tokenCollection}/items`}
                      className="group"
                >
                    <div className="inline-flex gap-2 items-center my-2">
                        {fetching && <CircleIconLoader size={27}/>}
                        {collection &&
                            <img src={collection.media}
                                 alt={tokenCollection.name}
                                 className="rounded-full object-cover w-[27px] h-[27px]"
                            />
                        }
                        <span className="font-bold text-gray-600 text-lg group-hover:text-gray-900">
                            {tokenCollection.name}
                        </span>
                    </div>
                </Link>
            }
        </section>
    );
};

export default TokenPreviewTitleCollection;