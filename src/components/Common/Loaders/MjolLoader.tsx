import React from 'react';


interface PropTypes {
    size?: number
}

const MjolLoader = React.memo<PropTypes>(({size = 30}) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div style={{
                border: "4px solid #f3f3f3", /* Light grey */
                borderTop: "4px solid #3498db", /* Blue */
                borderRadius: '50%',
                width: size,
                height: size,
                animation: "spin 1s linear infinite"
            }}/>
        </div>
    );
});

export default MjolLoader;