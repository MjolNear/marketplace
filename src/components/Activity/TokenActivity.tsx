import React, {useMemo} from 'react';
import {useTokenActivityQuery} from "../../graphql/generated/market-graphql";
import CardActivity from "./CardActivity";

interface TokenActivityProps {
    tokenUID: string
}

const TokenActivity: React.FC<TokenActivityProps> = ({
    tokenUID
}) => {

    const {data, loading} = useTokenActivityQuery({
        variables: {
            tokenUID
        }
    })

    const activities = useMemo(() => data?.tokenActivity || [], [data])

    return <CardActivity loading={loading} activities={activities}/>
};

export default TokenActivity;