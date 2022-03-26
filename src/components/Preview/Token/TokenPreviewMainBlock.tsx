import React from 'react';
import TokenPayoutDetails from "./Blocks/TokenPayoutDetails";
import TokenMarketStatus from "./Blocks/TokenMarketStatus";
import TokenDetails from "./Blocks/TokenDetails";
import {TokenPreviewProps} from "./TokenPreviewProps";
import SharePopup from "../../Common/Share/SharePopup";
import TokenPreviewTitleCollection from "./Blocks/TokenPreviewTitleCollection";
import TokenPreviewOwnerContract from "./Blocks/TokenPreviewOwnerContract";

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
            <TokenPreviewTitleCollection title={token.title}
                                         contractId={token.contractId}
            />
            <TokenPreviewOwnerContract ownerId={token.ownerId}
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
                          copies={token.copies}
            />
            <TokenPayoutDetails payouts={payouts}/>
        </div>
    );
};

export default TokenPreviewMainBlock;