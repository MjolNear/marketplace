import React, {memo, useMemo} from 'react';
import {motion, Transition} from "framer-motion";


interface TMjolLoaderProps {
    size?: number
}

const MjolLoader: React.FC<TMjolLoaderProps> = ({size = 30}) => {

    const initial = useMemo(() => ({
        rotate: 0
    }), [])

    const animate = useMemo(() => ({
        rotate: 360,
    }), [])

    const style = useMemo(() => ({
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #3498db",
        borderRadius: '50%',
        width: size,
        height: size,
    }), [size])

    const transition: Transition = useMemo(() => ({
        repeatType: "loop",
        duration: 1,
        ease: "linear",
        repeat: Infinity,
    }), [])

    return (
        <div className="flex items-center justify-center w-full h-full">
            <motion.div
                style={style}
                initial={initial}
                animate={animate}
                transition={transition}
            />
        </div>
    );
};

export default memo(MjolLoader);