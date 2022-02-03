import React from 'react';

const DarkBlueTitle = ({title, classes = undefined}) => {
    return (
        <div
            className={
                "font-extrabold font-archivo text-transparent bg-clip-text " +
                "bg-gradient-to-r from-[#48B3EF] to-[#135D86] " +
                (classes ? classes : "text-center text-3xl md:text-5xl lg:text-6xl")
            }
        >
            {title}
        </div>
    );
};

export default DarkBlueTitle;