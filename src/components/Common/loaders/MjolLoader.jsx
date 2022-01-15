import React from 'react';

const MjolLoader = React.memo(({width = 30, height = 30}) => {
    return (
        <div style={{
            border: "4px solid #f3f3f3", /* Light grey */
            borderTop: "4px solid #3498db", /* Blue */
            borderRadius: '50%',
            width,
            height,
            animation: "spin 1s linear infinite"
        }}/>
    );
});

export default MjolLoader;