import React, {useState} from 'react';
import {Area, AreaChart, Tooltip, XAxis, YAxis} from 'recharts';


interface MarketVolumeChartPoint {
    dateString: string,
    volume: number
}

interface MarketVolumeChartProps {
    data: MarketVolumeChartPoint[]
}

const MarketStatsChart: React.FC<MarketVolumeChartProps> = ({
    data
}) => {
    const [{volume, dateString}, setTitle] = useState({
        volume: data.map(({volume}) => volume).reduce((a, b) => a + b, 0),
        dateString: 'last 30 days'
    })
    return (
        <div className="flex flex-col">
            <div className="text-xl font-archivo font-bold opacity-70">VOLUME</div>
            <div className="text-2xl font-bold font-archivo text-blue-600">{volume}</div>
            <div>{dateString}</div>
            <AreaChart width={730} height={250} data={data}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}
                       onMouseEnter={e => console.log(e)}
                       onMouseMove={e => {
                           if (e.isTooltipActive) {
                               setTitle({...data[e.activeTooltipIndex || 0]})
                           }
                       }}
            >
                <defs>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgb(120, 192, 233)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="rgb(120, 192, 233)" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="dateString"/>
                <Tooltip/>
                <Area type="monotone" dataKey="volume" stroke="rgb(120, 192, 255)" fillOpacity={1}
                      fill="url(#colorVolume)"/>
            </AreaChart>
        </div>
    )
};

export default MarketStatsChart;