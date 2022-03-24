import React from 'react';
import NftPreviewTitle from "./Blocks/NftPreviewTitle";
import TokenPayoutDetails from "./Blocks/TokenPayoutDetails";
import TokenMarketStatus from "./Blocks/TokenMarketStatus";
import TokenDetails from "./Blocks/TokenDetails";
import {TokenPreviewProps} from "./Blocks/TokenPreviewProps";
import SharePopup from "../../Common/Share/SharePopup";

const TokenPreviewMainBlock: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {
    return (
        <div className="flex flex-col flex-grow-[4] flex-shrink-0 basis-0 gap-4">
            <div className="self-end">
                <SharePopup link={`mjolnear.com/#/nfts/${token.contractId}/${token.tokenId}`}/>
            </div>
            <NftPreviewTitle title={token.title}
                             ownerId={token.ownerId}
                             contractId={token.contractId}
                             mintSiteName={token.mintedSiteName}
                             verification={contract?.verification}
            />
            <TokenMarketStatus token={token}
                               contract={contract}
                               payouts={payouts}
            />
            <TokenDetails contractId={token.contractId}
                          tokenId={token.tokenId}
                          ownerId={token.ownerId}
            />
            <TokenPayoutDetails payouts={payouts}/>
        </div>
    );
};

export default TokenPreviewMainBlock;