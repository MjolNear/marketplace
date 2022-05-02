import React from 'react';
import {useMarketStatisticsQuery} from "../../../graphql/generated/graphql";
import MarketVolumeChart, {MarketVolumeChartPoint} from "./MarketVolumeChart";
import {utils} from "near-api-js";

const MarketStats = () => {

    const now = Date.now()
    const today = new Date().setDate(now)



    const {data, loading} = useMarketStatisticsQuery({
        variables: {
            fromTimestamp: "100000"
        }
    })

    const chartData: MarketVolumeChartPoint[] = data?.dailyMarketStats.map(point => ({
        date: parseInt(point.timestamp),
        volume: parseFloat(utils.format.formatNearAmount(point.volume, 3))
    })) || []

    return (
        <div className="flex justify-center px-3 pt-10">
            <MarketVolumeChart data={chartData}/>
        </div>
    );
};

export default MarketStats;