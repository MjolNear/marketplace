import {useEffect, useState} from "react";

export const isMobileWidth = (): boolean => {
    // tailwind lg screen size = 990px
    return window.innerWidth < 990;
};

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(isMobileWidth());

    useEffect(() => {
        const handleResize = () => setIsMobile(isMobileWidth());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};