import React from 'react';
import imgLogo from "../../../resources/hammer.png";
import GradientText from "../../../components/Common/Text/GradientText";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="inline-flex gap-3 items-center">
                <img
                    className="inline-block h-6 w-auto sm:h-[28px]"
                    src={imgLogo}
                    alt="logo"
                />
                <GradientText text="MjolNear"
                              fontWeight="black"
                              size="3xl"
                              style={{
                                  backgroundImage: 'linear-gradient(330deg, #57F2CC 20%, #4596FB 100%)',
                                  letterSpacing: 3,
                                  fontFamily: "etna"
                              }}
                />
            </div>
        </Link>
    );
};

export default Logo;