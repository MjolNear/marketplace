import React from 'react';

const BlueGradientText = ({title}) => {
    return (
        <div
            className="p-2 text-3xl text-center font-extrabold text-transparent bg-clip-text
                           md:text-6xl bg-gradient-to-br from-green-900 to-light_blue">
            {title}
        </div>
    );
};

export default BlueGradientText;