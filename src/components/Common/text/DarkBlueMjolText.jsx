import React from 'react';

const DarkBlueMjolText = ({text, classes = undefined}) => {
    return (
        <div className={
            "text-transparent bg-clip-text bg-gradient-to-bl font-archivo from-blue-500 to-blue-800 " +
            (classes ? classes : "text-center font-extrabold font-sm")
        }
        >
            {text}
        </div>
    );
};

export default DarkBlueMjolText;