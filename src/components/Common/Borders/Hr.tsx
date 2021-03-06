import React from 'react';

interface TBorderProps {
    color?:string
}

const Hr: React.FC<TBorderProps> = ({color = "bg-black"}) => {
    return <div className={color + " h-px w-full"}/>
};

export default Hr;