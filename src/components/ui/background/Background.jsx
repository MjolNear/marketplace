import React from 'react';

import bg from '../../../resources/background/paras-bg.jpg'

const Background = ({children}) => {
    return (
        <div className="h-screen w-screen"
             style={{backgroundImage: `url(${bg})`, backgroundSize: '100% 100%'}}>
            {children}
        </div>
    );
};

export default Background;