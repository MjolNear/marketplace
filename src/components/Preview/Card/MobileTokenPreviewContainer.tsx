import React from 'react';
import {TokenPreviewProps} from './Blocks/TokenPreviewProps';
import {useTokenPayouts} from "../../../hooks/token/useTokenPayouts";
import TokenMedia from "./Blocks/TokenMedia";
import NftPreviewTitle from "./Blocks/NftPreviewTitle";
import TokenDetails from "./Blocks/TokenDetails";
import TokenActivity from "./Blocks/TokenActivity";
import TokenTraits from "./Blocks/TokenTraits";
import TokenPayoutDetails from "./Blocks/TokenPayoutDetails";
import TokenDescription from "./Blocks/TokenDescription";
import TokenMarketStatus from "./Blocks/TokenMarketStatus";

const MobileTokenPreviewContainer: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {
    return (
        <div className="flex flex-col w-full max-w-[600px] px-4 gap-4">
            <NftPreviewTitle title={token.title}
                             ownerId={token.ownerId}
            />
            <TokenMedia link={token.media}/>
            <TokenMarketStatus token={token}
                               contract={contract}
                               payouts={payouts}
            />
            <TokenDescription description={token.description}/>
            <TokenDetails tokenId={token.tokenId}
                          ownerId={token.ownerId}
                          contractId={token.contractId}
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