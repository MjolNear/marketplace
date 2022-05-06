import React from 'react';
import imgLogo from "../../../resources/hammer.png";
import {Link} from "react-router-dom";
import GradientText from "../Text/GradientText";


const LogoLink = React.memo(() => {
    return (
        <Link to="/">
            <div className="inline-flex gap-3 items-center">
                <img
                    className="inline-block h-6 w-auto sm:h-[30px]"
                    src={imgLogo}
                    alt="logo"
                />
                <div className="hidden lg:block">
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
            </div>
        </Link>
    );
});

export default LogoLink;