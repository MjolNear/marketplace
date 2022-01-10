import React from 'react';

import lottieJson from "../../../resources/loading.json";
import Lottie from "react-lottie-player";

const ImageLoader = ({width = 40, height = 40}) => {
    return <Lottie
        loop
        animationData={lottieJson}
        play
        style={{width, height}}
    />
};

export default ImageLoader;