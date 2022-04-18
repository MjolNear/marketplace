import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface PropTypes {
    isActive: boolean
}

const AnimatedBlueUnderline = React.memo<PropTypes>(({isActive}) => {
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
                    className="h-1 bg-gradient-to-r
                               from-mjol-gradient-blue-from to-mjol-gradient-blue-to rounded-t-[2px]"
                />
            }
        </AnimatePresence>
    );
});

export default AnimatedBlueUnderline;