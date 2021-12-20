import React from 'react';

const ExploreNftContainer = ({children, styles = ""}) => {
    return (
            <div className={
                ["flex flex-col justify-between w-full h-full rounded-3xl ring-inset ring-2 ring-light_blue bg-white", styles].join(' ')
            }>
                {children}
            </div>
    );
};

export default ExploreNftContainer;