import React from 'react';
import {Link} from "react-router-dom";
import {FetchWhitelistedCollectionIdHookResult} from "../../../../hooks/collection/useFetchTokenCollection";
import {Img} from "react-image";
import CircleIconLoader from "../../../Common/Loaders/CircleIconLoader";

interface TokenPreviewTitleCollection {
    title: string
    collection: FetchWhitelistedCollectionIdHookResult
}

const TokenPreviewTitleCollection: React.FC<TokenPreviewTitleCollection> = ({
    title,
    collection
}) => {
    const {data} = collection
    return (
        <section className="font-archivo">
            <div className="font-black text-2xl">
                {title}
            </div>
            {data &&
                <Link to={`/collections/${data.collectionId}/items`}
                      className="group"
                >
                    <div className="inline-flex gap-2 items-center my-2">
                        {data &&
                            <Img src={data.image}
                                 alt={data.title}
                                 className="rounded-full object-cover w-[27px] h-[27px]"
                                 loader={<CircleIconLoader size={27}/>}
                            />
                        }
                        <span className="font-bold text-gray-600 text-lg group-hover:text-gray-900">
                            {data.title}
                        </span>
                    </div>
                </Link>
            }
        </section>
    );
};

export default TokenPreviewTitleCollection;