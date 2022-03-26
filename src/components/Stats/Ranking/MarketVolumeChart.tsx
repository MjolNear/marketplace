import React, {useEffect, useMemo, useState} from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {unix} from "dayjs";
import MjolLoader from "../../Common/Loaders/MjolLoader";

export interface MarketVolumeChartPoint {
    date: number,
    volume: number,

}

interface MarketVolumeChartProps {
    data: MarketVolumeChartPoint[],
    loading: boolean
}

const MarketVolumeChart: React.FC<MarketVolumeChartProps> = ({
    data,
    loading
}) => {

    const totalVolume = useMemo(() =>
            data.reduce((a, b) => a + b.volume, 0)
                .toFixed(5),
        [data]
    )

    const [tooltipData, setTooltipData] = useState<{ title: string, subtitle?: number }>({
        title: totalVolume
    })


    useEffect(() => {
        if (!tooltipData && data.length > 0) {
            setTooltipData({title: totalVolume})
        }
    }, [tooltipData, data, totalVolume])

    return (
        <div className="p-4 rounded-md w-full max-w-[750px] bg-black"
             style={{
                 backgroundImage: 'linear-gradient(225deg, rgba(2, 9, 164, 0.2) 0%, rgba(10, 131, 224, 0.2) 100%)'
             }}
        >
            {tooltipData && (
                <div>
                    <p className="text-sm uppercase text-gray-300">
                        Volume
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white font-archivo">
                        Ⓝ {tooltipData.title}
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">
                        {tooltipData.subtitle
                            ? unix(tooltipData.subtitle / 1000).format('MMM D, YYYY')
                            : 'in 30 days'
                        }
                    </p>
                </div>
            )}

            {loading
                ?
                <div className="mt-6">
                    <MjolLoader size={22.5}/>
                </div>
                : data.length === 0
                    ?
                    <div className="font-archivo text-gray-200 font-semibold text-center mt-6 text-[15px]">
                        No data for given period
                    </div>
                    :
                    <div className="h-[260px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data} width={750}
                                margin={{top: 5, right: 20, left: 10, bottom: 5}}
                                onMouseLeave={() => {
                                    setTooltipData({title: totalVolume})
                                }}
                            >
                                <defs>
                                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="rgb(120, 192, 233)" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="rgb(120, 192, 233)" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>

                                {/*<defs>*/}
                                {/*    <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="1">*/}
                                {/*        <stop offset="5%" stopColor="#06FFFF" stopOpacity={0.5} />*/}
                                {/*        <stop offset="90%" stopColor="#06FFFF" stopOpacity={0} />*/}
                                {/*    </linearGradient>*/}
                                {/*</defs>*/}


                                <XAxis
                                    interval={1}
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={8}
                                    stroke="rgba(255, 255, 255, 0.6)"
                                    tickFormatter={(x) => {
                                        return `${unix(x / 1000).date()}`
                                    }}
                                />
                                <Tooltip
                                    contentStyle={{display: 'none'}}
                                    formatter={(value: any, name: any, props: any) => {
                                        if (tooltipData && tooltipData.title !== value) {
                                            setTooltipData({
                                                title: value,
                                                subtitle: props.payload.date,
                                            })
                                        }
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="volume"
                                    dot={false}
                                    stroke="rgb(120, 192, 255)"
                                    fillOpacity={1}
                                    fill="url(#colorVolume)"
                                />
                                {/*<Area type="monotone"*/}
                                {/*      dataKey="volume"*/}
                                {/*      stroke="rgb(120, 192, 255)"*/}
                                {/*      fillOpacity={1}*/}
                                {/*      fill="url(#colorVolume)"*/}
                                {/*/>*/}
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
            }
        </div>)
};

export default MarketVolumeChart;