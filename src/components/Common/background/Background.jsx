import React from 'react';
import lights from '../../../resources/lights.jpeg'

const Background = ({children}) => {
    return (
        <div
            // className="filter blur-xl opacity-50"
            style={{
                // backgroundImage: `url(${lights}`

                // background:"#ffffff",
                // backgroundImage: "radial-gradient(at 42% 49%, hsla(212,100%,89%,1) 0, transparent 51%),radial-gradient(at 57% 47%, hsla(181,100%,87%,1) 0, transparent 51%)"


                // background:"#ffffff",
                // backgroundImage: "radial-gradient(at 1% 61%, hsla(184,61%,53%,1) 0, transparent 43%),radial-gradient(at 91% 40%, hsla(194,72%,85%,1) 0, transparent 48%)"


                // background: "#0b8ac9",
                // backgroundImage:
                //     "radial-gradient(at 52% 17%, hsla(194,72%,85%,1) 0, transparent 100%), radial-gradient(at 65% 52%, hsla(194,68%,60%,1) 0, transparent 28%)"


                //
                // background: "#0b8ac9",
                // backgroundImage:
                //     "radial-gradient(at 50% 16%, hsla(194,60%,57%,1) 0, transparent 60%), radial-gradient(at 65% 52%, hsla(194,68%,60%,1) 0, transparent 54%)"

            }}
        >
            {children}
        </div>
    );
};

export default Background;