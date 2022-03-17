import React from 'react';
import {TokenPreviewProps} from "./Blocks/TokenPreviewProps";
import TokenPreviewSummaryBlock from "./TokenPreviewSummaryBlock";
import TokenPreviewMainBlock from "./TokenPreviewMainBlock";
import TokenActivity from "./Blocks/TokenActivity";


const DesktopTokenPreviewContainer: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {

    console.log(token.extra)

    return (
        <div className="max-lg:hidden w-full flex flex-col mx-5">
            <div className="flex flex-row justify-center mb-5 gap-8">
                <TokenPreviewSummaryBlock media={token.media}
                                          description={token.description}
                                          ownerId={token.ownerId}
                                          contractId={token.contractId}
                                          tokenId={token.tokenId}
                />
                <TokenPreviewMainBlock token={token}
                                       contract={contract}
                                       payouts={payouts}
                />
            </div>
            <TokenActivity contractId={token.contractId}
                           tokenId={token.tokenId}
            />
        </div>
    );
};

export default DesktopTokenPreviewContainer;