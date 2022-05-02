import React from 'react';

const DarkBlueTitle = ({title, classes = undefined}) => {
    return (
        <div
            className={
                "font-extrabold font-archivo text-transparent bg-clip-text " +
                "bg-gradient-to-r from-mjol-light-blue to-mjol-dark-blue " +
                (classes ? classes : "text-center text-3xl md:text-5xl lg:text-6xl")
            }
        >
            {title}
        </div>
    );
};

export default DarkBlueTitle;