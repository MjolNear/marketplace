import React from 'react';
import {Link} from "react-router-dom";
import {whitelistedCollections} from "../../../../business-logic/whitelisted.collections";

interface TokenPreviewTitleCollection {
    title: string
    contractId: string
}

const TokenPreviewTitleCollection: React.FC<TokenPreviewTitleCollection> = ({
    title,
    contractId
}) => {
    const collection = whitelistedCollections[contractId]
    return (
        <section className="font-archivo">
            <div className="font-black text-2xl">
                {title}
            </div>
            {collection &&
                <Link to={`/collections/${contractId}/${collection.collectionId}/items`}
                      className="font-bold text-gray-600 text-xs-3 hover:text-gray-900"
                >
                    {collection.name}
                </Link>
            }
        </section>
    );
};

export default TokenPreviewTitleCollection;