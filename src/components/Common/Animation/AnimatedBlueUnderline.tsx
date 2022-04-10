import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

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
                    className="hidden sm:block h-[2.5px] bg-mjol-tab-blue rounded-t-[3px]"
                />
            }
        </AnimatePresence>
    );
});

export default AnimatedBlueUnderline;