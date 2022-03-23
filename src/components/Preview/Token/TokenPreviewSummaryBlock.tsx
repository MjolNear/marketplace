import React, {memo} from 'react';
import {Optional} from "../../../business-logic/models/types";
import TokenMedia from "./Blocks/TokenMedia";
import {TTokenDetailsProps} from "./Blocks/TokenDetails";
import TokenTraits from "./Blocks/TokenTraits";
import TokenDescription from "./Blocks/TokenDescription";

interface TPreviewTokenSummaryProps extends TTokenDetailsProps {
    media?: Optional<string>
    description?: Optional<string>
}

const TokenPreviewSummaryBlock: React.FC<TPreviewTokenSummaryProps> = ({
    media,
    description,

    contractId,
    tokenId,
    ownerId
}) => {
    return (
        <div className="flex flex-col flex-grow-[3] flex-shrink-0 basis-0 max-w-[45%] gap-4">
            <TokenMedia link={media}/>
            <TokenDescription description={description}/>
            <TokenTraits traits={[]}/>
        </div>
    );
};

export default TokenPreviewSummaryBlock;