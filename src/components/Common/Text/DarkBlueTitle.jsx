import React from 'react';

const DarkBlueTitle = ({title, classes = undefined}) => {
    return (
        <div
            className={
                "font-extrabold font-archivo text-transparent bg-clip-text " +
                "bg-gradient-to-br from-teal-900 to-mjol-blue-base " +
                (classes ? classes : "text-center text-3xl md:text-5xl lg:text-6xl")
            }
        >
            {title}
        </div>
    );
};

export default DarkBlueTitle;