import React, {useMemo, useState} from 'react';
import {useDailyMarketStatsQuery} from "../../../graphql/generated/graphql";
import MarketVolumeChart, {MarketVolumeChartPoint} from "./MarketVolumeChart";
import {utils} from "near-api-js";
import dayjs from "dayjs";
import {nowUTC} from "../../../utils/time";

const MarketStats = () => {

    const now = useMemo(
        () => dayjs(nowUTC()).hour(0).minute(0).second(0).millisecond(0),
        []
    )

    console.log(Date.now())
    // console.log(now)
    // const today = new Date().setDate(now)
    //
    // console.log(today)

    console.log(now.unix())

    const [fromTimestamp, setFromTimestamp] = useState("0")


    const {data, loading} = useDailyMarketStatsQuery({
        variables: {
            fromTimestamp
        }
    })

    const chartData: MarketVolumeChartPoint[] = useMemo(
        () => data?.dailyMarketStats.map(dailyStats => ({
            date: parseInt(dailyStats.timestamp),
            volume: parseFloat(utils.format.formatNearAmount(dailyStats.volume, 10)),
            sales: parseInt(dailyStats.sales)
        })) || [],
        [data]
    )

    return (
        <div className="flex justify-center px-3 pt-10">
            <MarketVolumeChart data={chartData}
                               loading={loading}
            />
        </div>
    );
};

export default MarketStats;