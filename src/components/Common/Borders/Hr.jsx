import React from 'react';

const Hr = React.memo(({color = "bg-black"}) => {
    return <div className={color + " h-px"}/>
});

export default Hr;