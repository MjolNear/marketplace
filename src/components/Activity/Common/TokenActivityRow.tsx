import React from 'react';
import {TokenActivityRowProps} from "../types";
import ActivityEventCell from "../Cells/ActivityEventCell";
import ActivityTokenCell from "../Cells/ActivityTokenCell";
import ActivityAccountCell from "../Cells/ActivityAccountCell";
import ActivityPriceCell from "../Cells/ActivityPriceCell";
import ActivityTimestampCell from "../Cells/ActivityTimestamp";

const TokenActivityRow: React.FC<TokenActivityRowProps & { collectionId: string, collectionName: string }> = ({
    owner,
    buyer,
    txHash,
    blockHash,
    timestamp,
    eventType,
    price,
    token,
    collectionId,
    collectionName,
}) => {
    return (
        <>
            <div className="p-3 hover:bg-mjol-hover rounded-2xl hover:shadow-mjol-gray">
                <div className="max-lg:hidden grid lg:grid-cols-7 md:gap-5 lg:gap-10 lg:h-19">
                    <ActivityEventCell event={eventType}/>
                    <ActivityTokenCell {...token}
                                       collectionId={collectionId}
                                       collectionName={collectionName}
                    />
                    <ActivityPriceCell price={price}/>
                    <ActivityAccountCell accountId={owner.id}/>
                    <ActivityAccountCell accountId={buyer?.id}/>
                    <ActivityTimestampCell timestamp={timestamp} txHash={txHash} blockHash={blockHash}/>
                </div>
                <div className="lg:hidden grid grid-cols-4">
                    <ActivityTokenCell {...token}
                                       collectionId={collectionId}
                                       collectionName={collectionName}
                    />
                    <ActivityPriceCell price={price}/>
                </div>
            </div>
        </>
    );
};

export default TokenActivityRow;
