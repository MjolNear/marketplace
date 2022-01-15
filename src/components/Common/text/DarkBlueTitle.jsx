import React from 'react';

const DarkBlueTitle = ({title, classes}) => {
    return (
        <div
            className={
                "font-extrabold text-transparent bg-clip-text " +
                "bg-gradient-to-br from-teal-900 to-mjol-blue-base " +
                (classes ? classes : "text-center text-5xl md:text-6xl lg:text-7xl")
            }
        >
            {title}
        </div>
    );
};

export default DarkBlueTitle;