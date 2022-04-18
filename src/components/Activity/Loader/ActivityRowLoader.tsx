import React from 'react';

const gradient = (direction: string) =>
    `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`

interface PulseBlockProps {
    width?: string | number
    height?: string | number
    aspectRatio?: string
}

const PulseBlock: React.FC<PulseBlockProps> = ({
    width = "80%",
    height = "50%",
    aspectRatio
}) => {
    return (
        <div className="mjol-pulse-animation rounded-xl"
             style={{
                 width,
                 height,
                 aspectRatio,
                 background: gradient('right')
             }}/>
    )
}

const ActivityRowLoader = () => {
    return (
        <div className="py-3 px-4 rounded-2xl">
            <div className="max-lg:hidden grid lg:grid-cols-7 md:gap-5 lg:gap-10 items-center">
                <PulseBlock/>
                <div className="w-full h-full col-span-2 inline-flex items-center gap-4">
                    <PulseBlock width={60} height={60} aspectRatio="1/1"/>
                    <PulseBlock/>
                </div>
                <PulseBlock/>
                <PulseBlock/>
                <PulseBlock/>
                <PulseBlock/>
            </div>
        </div>
    );
};

export default ActivityRowLoader;