import React from 'react';

import bg from '../../../resources/background/lights.gif'

const Background = ({children}) => {
    return (
        <div className="fixed filter blur-lg opacity-80 inset-0"
             style={{
                 backgroundImage: `url(${bg})`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}>
            {children}
        </div>
    );
};

export default Background;