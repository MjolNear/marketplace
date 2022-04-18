import React from 'react';
import RectLoader from "../../Common/Loaders/RectLoader";

const ActivityRowLoader: React.FC<{ mt?: number }> = ({
    mt
}) => {
    return (
        <div className="max-w-[1050px] mx-auto px-2 sm:px-4 h-fit">
            <div className="rounded-2xl overflow-hidden h-[85px]"
                 style={{
                     marginTop: mt
                 }}>
                <RectLoader/>
            </div>
        </div>
    );
};

export default ActivityRowLoader;