import React from 'react';

const DarkBlueMjolText = ({text, classes}) => {
    return (
        <div className={
            "text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 to-blue-800 " +
            (classes ? classes : "text-center font-extrabold")
        }
        >
            {text}
        </div>
    );
};

export default DarkBlueMjolText;