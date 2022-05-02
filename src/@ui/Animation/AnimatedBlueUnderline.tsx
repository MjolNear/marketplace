import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';

interface AnimatedUnderlineProps {
    isActive: boolean
    height?: number | string
}

const AnimatedBlueUnderline = React.memo<AnimatedUnderlineProps>(({
    isActive,
    height = 4
}) => {
    return (
        <AnimatePresence initial={false}>
            {
                isActive && <motion.div
                    initial={{
                        width: 0
                    }}
                    animate={{
                        width: "100%"
                    }}
                    transition={{
                        duration: 0.15
                    }}
                    style={{
                        height
                    }}
                    className="bg-gradient-to-r from-mjol-gradient-blue-from to-mjol-gradient-blue-to rounded-t-[2px]"
                />
            }
        </AnimatePresence>
    );
});

export default AnimatedBlueUnderline;