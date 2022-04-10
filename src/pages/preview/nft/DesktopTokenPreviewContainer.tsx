import React from 'react';
import {TokenPreviewProps} from "../../../components/Preview/Token/TokenPreviewProps";
import TokenPreviewSummaryBlock from "../../../components/Preview/Token/TokenPreviewSummaryBlock";
import TokenPreviewMainBlock from "../../../components/Preview/Token/TokenPreviewMainBlock";
import TokenActivity from "../../../components/Preview/Token/Blocks/TokenActivity";


const DesktopTokenPreviewContainer: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {
    return (
        <div className="w-full flex flex-col mx-5">
            <div className="flex flex-row justify-center mb-5 gap-8">
                <TokenPreviewSummaryBlock media={token.media}
                                          description={token.description}
                                          ownerId={token.ownerId}
                                          contractId={token.contractId}
                                          tokenId={token.tokenId}
                                          ipfsReference={token.ipfsReference}
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