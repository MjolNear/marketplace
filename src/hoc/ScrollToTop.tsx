import React, {useEffect} from "react";

const ScrollToTop: React.FC = ({children}) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

    return <>{children}</>
};

export default ScrollToTop