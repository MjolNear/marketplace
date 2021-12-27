import React from 'react';

const TitleCollection = ({title}) => {
    return (
        <div className="font-mono font-extrabold text-black text-lg md:text-xl">
            {title}
        </div>
    );
};

export default TitleCollection;