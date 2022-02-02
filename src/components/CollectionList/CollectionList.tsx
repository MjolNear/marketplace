import React from 'react';
import {Collection} from "../../business-logic/models/collection";
import CollectionCard from "../Collection/CollectionCard";

interface PropTypes {
    collections: Collection[]
}

const CollectionList: React.FC<PropTypes> = ({collections}) => {
    return (
        <div className="grid justify-center gap-6
                        grid-cols-1
                        xxs:grid-cols-[330px]
                        md:grid-cols-[330px_330px]
                        xl:grid-cols-[330px_330px_330px]
                        "
        >
            {collections.map(
                collection => (
                    <CollectionCard collection={collection}
                                    key={collection.collection_id}
                    />
                ))
            }
        </div>
    )
}

export default CollectionList;