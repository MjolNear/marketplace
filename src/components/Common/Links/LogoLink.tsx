import React from 'react';
import imgLogo from "../../../resources/hammer.png";
import {Link} from "react-router-dom";
import GradientText from "../Text/GradientText";


// background: linear-gradient(244.91deg, #D4FFEC 15.94%, #57F2CC 48.55%, #4596FB 84.06%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// background-clip: text;
// text-fill-color: transparent;

const LogoLink = React.memo(() => {
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
});

export default LogoLink;