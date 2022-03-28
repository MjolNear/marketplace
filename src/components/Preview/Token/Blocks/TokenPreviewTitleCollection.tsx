import React from 'react';
import {Link} from "react-router-dom";
import {whitelistedCollections} from "../../../../business-logic/whitelisted.collections";
import {TokenCollectionMetadata} from "../../../../business-logic/models/nft";
import {Optional} from "../../../../business-logic/models/types";

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
    const collection = collectionMeta ? collectionMeta : whitelistedCollections[contractId]
    return (
        <section className="font-archivo">
            <div className="font-black text-2xl">
                {title}
            </div>
            {collection &&
                <Link to={`/collections/${contractId}/${collection.collectionId || collection}/items`}
                      className="font-bold text-gray-600 text-xs-3 hover:text-gray-900"
                >
                    {collection.name}
                </Link>
            }
        </section>
    );
};

export default TokenPreviewTitleCollection;