import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {Line} from 'rc-progress';
import {PropsWithChildren} from "../components/types";

interface IndicatorContextProps {
    active: boolean,
    setActive: (isActive: boolean) => void
}

const IndicatorContext = createContext<IndicatorContextProps>({
    active: false,
    setActive: () => {
    }
});

export const IndicatorProvider: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [active, setActive] = useState(false);
    const value = useMemo(() => ({active, setActive}), [active, setActive]);
    return (
        <IndicatorContext.Provider value={value}>
            {children}
        </IndicatorContext.Provider>
    );
}

export const Indicator: React.FC = () => {
    const {active} = useContext(IndicatorContext);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPercent(percent => (Math.min(percent + 1, 90)));
        }, 25);
    });

    useEffect(() => {
        setPercent(active ? 0 : 100)
    }, [active])

    return (
        <div className="h-1 w-full relative">
            {active &&
                <Line percent={percent} strokeWidth={0.3} strokeColor="#2db7f5" className="absolute top-0 left-0"/>}
        </div>
    )
}

export const IndicatorFallback: React.FC = () => {
    const {setActive} = useContext(IndicatorContext);
    useEffect(() => {
        setActive(true);
        return () => setActive(false);
    });
    return null;
}