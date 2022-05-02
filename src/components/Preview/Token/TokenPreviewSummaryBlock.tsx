import React from 'react';
import {Optional} from "../../../@types/Aliases";
import TokenMedia from "./Blocks/TokenMedia";
import {TTokenDetailsProps} from "./Blocks/TokenDetails";
import TokenTraits from "./Blocks/TokenTraits";
import TokenDescription from "./Blocks/TokenDescription";
import {useFetchTokenMetadata} from "../../../hooks/token/useFetchTokenMetadata";

interface TPreviewTokenSummaryProps extends TTokenDetailsProps {
    media?: Optional<string>
    ipfsReference?: Optional<string>
    description?: Optional<string>
}

const TokenPreviewSummaryBlock: React.FC<TPreviewTokenSummaryProps> = ({
    media,
    ipfsReference,
    description
}) => {
    const {loading, ...metadata} = useFetchTokenMetadata(ipfsReference)
    return (
        <div className="flex flex-col flex-grow-[3] flex-shrink-0 basis-0 max-w-[45%] gap-4">
            <TokenMedia url={media}/>
            <TokenDescription description={description || metadata.description}/>
            <TokenTraits loading={loading}
                         traits={metadata.attributes}
            />
        </div>
    );
};

export default TokenPreviewSummaryBlock;