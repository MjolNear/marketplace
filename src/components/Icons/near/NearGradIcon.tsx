import React, {useMemo} from 'react';
import {PixelIconProps} from "../IconProps";


const NearGradIcon = React.memo<PixelIconProps>(({size, fill}) => {

    const sizeStyle = useMemo(() => ({
        width: size,
        height: size
    }), [size])

    const viewBox = useMemo(() => `0 0 ${(288 / size) * 288} ${(288 / size) * 288}`, [])

    return (
        <div style={sizeStyle}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path className="fill-current"
                          d="M19.1736 1.21319L14.2154 8.57143C13.8725 9.07253 14.5318 9.67912 15.0066 9.25714L19.8857 5.01099C20.0175 4.90549 20.2022 4.98462 20.2022 5.16923V18.4352C20.2022 18.6198 19.9648 18.6989 19.8593 18.567L5.09008 0.896703C4.61535 0.316484 3.92964 0 3.1648 0H2.63733C1.2659 0 0.131836 1.13407 0.131836 2.53187V21.2044C0.131836 22.6022 1.2659 23.7363 2.6637 23.7363C3.53403 23.7363 4.35162 23.2879 4.82634 22.5231L9.78458 15.1648C10.1274 14.6637 9.4681 14.0571 8.99337 14.4791L4.11425 18.6989C3.98239 18.8044 3.79777 18.7253 3.79777 18.5407V5.3011C3.79777 5.11648 4.03513 5.03736 4.14063 5.16923L18.9099 22.8396C19.3846 23.4198 20.0967 23.7363 20.8351 23.7363H21.3626C22.7604 23.7363 23.8945 22.6022 23.8945 21.2044V2.53187C23.8945 1.13407 22.7604 0 21.3626 0C20.4659 0 19.6483 0.448352 19.1736 1.21319V1.21319Z"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="24" height="23.7363" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            {/*<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>*/}
            {/*    /!*<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="11" y1="11" y2="0">*!/*/}
            {/*    /!*    <stop offset=".21" stopColor={fill}/>*!/*/}
            {/*    /!*    <stop offset=".42" stopColor={fill} stopOpacity="0"/>*!/*/}
            {/*    /!*    <stop offset=".59" stopColor={fill} stopOpacity="0"/>*!/*/}
            {/*    /!*    <stop offset=".81" stopColor={fill}/>*!/*/}
            {/*    /!*</linearGradient>*!/*/}
            {/*    <path*/}
            {/*        d="M 15.5 145 A 16.45 16.45 0 0 0 27.96 139.29 L 140.52 8.72 A 16.42 16.42 0 0 0 126.58 1 A 16.46 16.46 0 0 0 114.17 6.65 L 1.04 136.45 A 16.46 16.46 0 0 0 15.5 145 Z"*/}
            {/*        fill={fill}/>*/}
            {/*    <path*/}
            {/*        d="M 17.5 145 A 16.46 16.46 0 0 0 25 143.17 V 34.17 L 112.45 139.11 A 16.44 16.44 0 0 0 125.09 145 H 128.54 A 16.46 16.46 0 0 0 145 128.54 V 17.46 A 16.46 16.46 0 0 0 128.54 1 A 16.36 16.36 0 0 0 121 2.81 V 111.86 L 33.55 6.92 A 16.44 16.44 0 0 0 20.91 1 H 17.46 A 16.46 16.46 0 0 0 1 17.46 V 128.54 A 16.46 16.46 0 0 0 17.46 145 Z"*/}
            {/*        fill={fill}/>*/}
            {/*</svg>*/}
        </div>
    );
});

export default NearGradIcon;