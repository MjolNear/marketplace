import React from 'react';
import {Link} from "react-router-dom";
import {FetchWhitelistedCollectionIdHookResult} from "../../../../hooks/collection/useFetchTokenCollection";
import {Img} from "react-image";
import CircleIconLoader from "../../../../@UI/Loaders/CircleIconLoader";
import SharePopup from '../../../Common/Share/SharePopup';
import {ContractId, TokenId} from "../../../../@types/Aliases";

interface TokenPreviewTitleCollection {
    title: string
    tokenId: TokenId
    contractId: ContractId
    collection: FetchWhitelistedCollectionIdHookResult
}

const TokenPreviewTitleCollection: React.FC<TokenPreviewTitleCollection> = ({
    title,
    tokenId,
    contractId,
    collection
}) => {
    const {data} = collection
    return (
        <section className="font-archivo">
            <div className="font-black text-2xl flex flex-row justify-between gap-2 items-center">
                {title}
                <SharePopup link={`mjolnear.com/nfts/${contractId}/${tokenId}`}/>
            </div>
            {data &&
                <Link to={`/collections/${data.collectionId}`}
                      className="group"
                >
                    <div className="inline-flex gap-2 items-center my-1">
                        {data &&
                            <Img src={data.image}
                                 alt={data.title}
                                 className="rounded-full object-cover w-10 h-10"
                                 loader={<CircleIconLoader size={40}/>}
                            />
                        }
                        <span
                            className="font-bold text-mjol-secondary text-[15px] group-hover:text-mjol-secondary-selected">
                            {data.title}
                        </span>
                    </div>
                </Link>
            }
        </section>
    );
};

export default TokenPreviewTitleCollection;