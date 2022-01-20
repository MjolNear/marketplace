import React from 'react';

import near from '../../../../resources/near-wallet.png'

const ConnectWithNearButton = () => {
    return (
        <div style={{
            objectFit: 'contain',
            background: `url(${near})`
        }}>

        </div>
    );
};

export default ConnectWithNearButton;