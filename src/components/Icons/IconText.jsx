import React from 'react';


const IconText = ({icon, text, className = ''}) => {
    return (
        <div className={"gap-2 flex flex-row items-center " + className}>
            {icon}
            {text}
        </div>
    );
};

export default IconText;