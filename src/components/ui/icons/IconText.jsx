import React from 'react';

const IconText = ({icon, text}) => {
    return (
        <div className="gap-2 flex flex-row items-center">
            {icon}
            {text}
        </div>
    );
};

export default IconText;