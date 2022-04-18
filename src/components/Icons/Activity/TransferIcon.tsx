import React from 'react';
import {IconProps} from "../IconProps";

const TransferIcon: React.FC<IconProps> = ({
    size,
    fill
}) => {
    return (
        <svg viewBox="0 0 24 24" focusable="false" className={fill} style={{
            width: size,
            height: size
        }}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0 7a3 3 0 013-3h8a3 3 0 013 3v9a2 2 0 01-2 2H8v-2h3.5a.5.5 0 00.5-.5V7a1 1 0 00-1-1H3a1 1 0 00-1 1v8a1 1 0 001 1h1v2H3a3 3 0 01-3-3V7z"
                  fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 7h6.225a3 3 0 012.021.783l2.775 2.53A3 3 0 0124 12.53V15a3 3 0 01-3 3h-1v-2h1a1 1 0 001-1v-2.47a1 1 0 00-.326-.739l-2.775-2.53A1 1 0 0018.225 9H15a1 1 0 00-1 1v5.5a.5.5 0 00.5.5H16v2h-4V7zM6 18a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"
                  fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M18 18a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
        </svg>
    );
};

export default TransferIcon;