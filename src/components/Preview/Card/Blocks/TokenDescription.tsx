import React, {memo} from 'react';
import {Optional} from '../../../../business-logic/models/types';

interface TTokenDescription {
    description?: Optional<string>
}

const TokenDescription: React.FC<TTokenDescription> = ({
    description
}) => {
    return (
        <>
            {description &&
                <div className="text-xs-2 font-archivo text-gray-600">
                    {description}
                </div>
            }
        </>
    )
};

export default TokenDescription;