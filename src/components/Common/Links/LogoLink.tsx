import React from 'react';
import imgLogo from "../../../resources/hammer.png";
import {Link} from "react-router-dom";

const LogoLink = React.memo(() => {
    return (
        <Link to="/">
            <div className="inline-flex gap-2 items-center">
                <img
                    className="inline-block h-6 w-auto sm:h-[30px]"
                    src={imgLogo}
                    alt="logo"
                />
                <div className="font-black text-3xl text-transparent bg-clip-text font-etna bg-gradient-to-l
                                from-mjol-light-blue to-cyan-700"
                     style={{
                         letterSpacing: 2
                     }}
                >
                    MjolNear</div>
            </div>
        </Link>
    );
});

export default LogoLink;