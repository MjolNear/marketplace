import React from 'react';

const DarkBlueMjolText = ({text}) => {
    return (
        <div className="text-center font-extrabold text-transparent
                        bg-clip-text bg-gradient-to-bl from-blue-500 to-blue-800"
        >
            {text}
        </div>
    );
};

export default DarkBlueMjolText;