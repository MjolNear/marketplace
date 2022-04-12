import React from 'react';
import {TokenPreviewProps} from '../../../components/Preview/Token/TokenPreviewProps';
import TokenMedia from "../../../components/Preview/Token/Blocks/TokenMedia";
import TokenDetails from "../../../components/Preview/Token/Blocks/TokenDetails";
import TokenActivity from "../../../components/Preview/Token/Blocks/TokenActivity";
import TokenTraits from "../../../components/Preview/Token/Blocks/TokenTraits";
import TokenPayoutDetails from "../../../components/Preview/Token/Blocks/TokenPayoutDetails";
import TokenDescription from "../../../components/Preview/Token/Blocks/TokenDescription";
import TokenMarketStatus from "../../../components/Preview/Token/Blocks/TokenMarketStatus";
import TokenPreviewTitleCollection from "../../../components/Preview/Token/Blocks/TokenPreviewTitleCollection";
import TokenPreviewOwnerContract from "../../../components/Preview/Token/Blocks/TokenPreviewOwnerContract";
import {useFetchTokenCollection} from "../../../hooks/collection/useFetchTokenCollection";

const MobileTokenPreviewContainer: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {
    const collection = useFetchTokenCollection(token.contractId, token.extra)

    return (
        <div className="flex flex-col w-full max-w-[600px] px-2 gap-4">
            <TokenPreviewTitleCollection title={token.title}
                                         collection={collection}
            />
            <TokenMedia url={token.media}/>
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
                          ipfsReference={token.ipfsReference}
            />
            <TokenPayoutDetails payouts={payouts}/>
            <TokenTraits ipfsReference={token.ipfsReference}/>
            <TokenActivity tokenId={token.tokenId}
                           contractId={token.contractId}
            />
        </div>
    );
};

export default MobileTokenPreviewContainer;