import React from 'react';
import {CollectionId, ContractId} from "../../../@types/Aliases";
import {useDailyCollectionStatsQuery} from "../../../graphql/generated/graphql";
import {MJOL_CONTRACT_ID} from "../../../near/enviroment/contract-names";

interface CollectionStatsProps {
    contractId: ContractId
    collectionId: CollectionId
}

const CollectionStats: React.FC<CollectionStatsProps> = ({
    contractId,
    collectionId
}) => {

    const {data, loading} = useDailyCollectionStatsQuery({
        variables: {
            collection: contractId === MJOL_CONTRACT_ID
                ? `${contractId}-${collectionId}`
                : contractId
        }
    })

    const stats = data?.dailyCollectionStats || []

    return (
        <div>
            {/*{stats.map(s => <div>{s.average} {s.floor} {s.sales}</div>)}*/}
        </div>
    );
};

export default CollectionStats;