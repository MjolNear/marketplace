import React from 'react';
import SingleTokenAttribute from "./SingleTokenAttribute";

interface TokenAttributesProps {
    attributes: { trait_type: string, value: string }[]
}

const TokenAttributes: React.FC<TokenAttributesProps> = ({
    attributes
}) => {
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {attributes.map(a => <SingleTokenAttribute type={a.trait_type} value={a.value}/>)}
        </div>
    );
};

export default TokenAttributes;