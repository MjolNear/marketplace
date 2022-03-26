import React from 'react';
import {TokenPreviewProps} from './TokenPreviewProps';
import TokenMedia from "./Blocks/TokenMedia";
import TokenDetails from "./Blocks/TokenDetails";
import TokenActivity from "./Blocks/TokenActivity";
import TokenTraits from "./Blocks/TokenTraits";
import TokenPayoutDetails from "./Blocks/TokenPayoutDetails";
import TokenDescription from "./Blocks/TokenDescription";
import TokenMarketStatus from "./Blocks/TokenMarketStatus";
import TokenPreviewTitleCollection from "./Blocks/TokenPreviewTitleCollection";
import TokenPreviewOwnerContract from "./Blocks/TokenPreviewOwnerContract";

const MobileTokenPreviewContainer: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {
    return (
        <div className="flex flex-col w-full max-w-[600px] px-2 gap-4">
            <TokenPreviewTitleCollection title={token.title}
                                         contractId={token.contractId}
                                         collectionMeta={token.collection}
            />
            <TokenMedia link={token.media}/>
            <TokenPreviewOwnerContract ownerId={token.ownerId}
                                       contractId={token.contractId}
                                       mintSiteName={token.mintedSiteName}
                                       verification={contract?.verification}
            />
            <TokenMarketStatus token={token}
                               contract={contract}
                               payouts={payouts}
            />
            <TokenDescription description={token.description}/>
            <TokenDetails tokenId={token.tokenId}
                          ownerId={token.ownerId}
                          contractId={token.contractId}
                          copies={token.copies}
            />
            <TokenPayoutDetails payouts={payouts}/>
            <TokenTraits traits={[]}/>
            <TokenActivity tokenId={token.tokenId}
                           contractId={token.contractId}
            />
        </div>
    );
};

export default MobileTokenPreviewContainer;