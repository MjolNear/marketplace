import React from 'react';
import MjolLoader from "./MjolLoader";

const SuspensePageLoader = () => {
    return (
        <div className="min-h-screen">
            <MjolLoader size={50}/>
        </div>
    );
};

export default SuspensePageLoader;