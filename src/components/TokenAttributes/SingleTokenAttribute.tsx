import React from 'react';
import LightBlueGradientText from "../Common/Text/LightBlueGradientText";

interface SingleTokenAttribute {
    type: string
    value: string
}

const SingleTokenAttribute: React.FC<SingleTokenAttribute> = ({
    type,
    value
}) => {
    return (
        <div className="flex flex-col ring-1 ring-blue-400 px-4 py-3 rounded-2xl items-start">
            <LightBlueGradientText text={type} fontWeight="medium" extraClasses="text-[13px]"/>
            <div className="text-[15px]">{value}</div>
        </div>
    );
};

export default SingleTokenAttribute;