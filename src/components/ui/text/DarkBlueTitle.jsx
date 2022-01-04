import React from 'react';

const DarkBlueTitle = ({title}) => {
    return (
        <div
            className="pb-2 text-3xl text-center font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-br from-teal-900 to-mjol-blue-base
                            md:text-6xl bg-black"
        >
            {title}
        </div>
    );
};

export default DarkBlueTitle;