import React from 'react';
import {IconProps} from "./IconProps";


const DefaultUserIcon: React.FC<IconProps> = ({
    size
}) => {
    return (
        <div className="rounded-full overflow-hidden">
            <svg width={size} height={size} viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="28837154015">
                        <stop stopColor="rgb(200, 55, 255)" offset="0%"></stop>
                        <stop stopColor="rgb(40, 0, 220)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect id="Rectangle" fill="url(#28837154015)" x="0" y="0" width="80" height="80"></rect>
                </g>
            </svg>
        </div>
    );
};

export default DefaultUserIcon;