import React, {useEffect, useState} from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {Optional} from "../../../business-logic/models/types";
import {unix} from "dayjs";

export interface MarketVolumeChartPoint {
    date: number,
    volume: number
}

interface MarketVolumeChartProps {
    data: MarketVolumeChartPoint[]
}

const MarketVolumeChart: React.FC<MarketVolumeChartProps> = ({
    data
}) => {
    const [tooltipData, setTooltipData] = useState<{
        title: number,
        subtitle: Optional<number>
    } | null>(null)

    useEffect(() => {
        if (!tooltipData && data.length > 0) {
            calculateTotalVolume()
        }
    }, [tooltipData, data])

    const calculateTotalVolume = () => {
        const totalVolume = data.reduce((a, b) => {
            return a + b.volume
        }, 0)
        setTooltipData({
            title: totalVolume,
            subtitle: null,
        })
    }

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

            {data.length > 0 && (
                <div className="h-[260px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data} width={750}
                            margin={{top: 5, right: 20, left: 10, bottom: 5}}
                            onMouseLeave={() => {
                                calculateTotalVolume()
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
                                    if (tooltipData && tooltipData.title != value) {
                                        console.log(props.payload.date)
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
            )}
        </div>
        // <div className="flex flex-col">
        //     <div className="text-sm font-archivo font-semibold opacity-70">VOLUME</div>
        //     <div className="text-2xl font-black font-archivo text-blue-600 inline-flex gap-2">
        //         {volume}
        //         <NearBlackLogo size={20}/>
        //     </div>
        //     <div>{dateString}</div>
        //     <AreaChart height={260} data={data}
        //                style={{
        //                    width: "100%"
        //                }}
        //                margin={{top: 10, right: 30, left: 0, bottom: 0}}
        //                onMouseEnter={e => console.log(e)}
        //                onMouseMove={e => {
        //                    if (e.isTooltipActive) {
        //                        setTitle({...data[e.activeTooltipIndex || 0]})
        //                    }
        //                }}
        //     >
        //         <defs>
        //             <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
        //                 <stop offset="5%" stopColor="rgb(120, 192, 233)" stopOpacity={0.8}/>
        //                 <stop offset="95%" stopColor="rgb(120, 192, 233)" stopOpacity={0}/>
        //             </linearGradient>
        //         </defs>
        //         <XAxis dataKey="dateString"/>
        //         <Tooltip/>
        //         <Area type="monotone" dataKey="volume" stroke="rgb(120, 192, 255)" fillOpacity={1}
        //               fill="url(#colorVolume)"/>
        //     </AreaChart>
        // </div>
    )
};

export default MarketVolumeChart;