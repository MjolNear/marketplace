import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

interface PropTypes {
    isActive: boolean
}

const AnimatedBlueUnderline = React.memo<PropTypes>(({isActive})=> {
    return (
        <AnimatePresence initial={false}>
            {
                isActive && <motion.div
                    initial={{
                        width: 0
                    }} animate={{
                    width: "100%"
                }}
                    transition={{
                        duration: 0.2
                    }}
                    className="hidden sm:block h-[2px] bg-blue-500 rounded-t-[2px]"
                />
            }
        </AnimatePresence>
    );
});

export default AnimatedBlueUnderline;