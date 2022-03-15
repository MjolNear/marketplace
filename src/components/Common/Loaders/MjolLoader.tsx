import React from 'react';
import {motion} from "framer-motion";


interface TMjolLoaderProps {
    size?: number
}

const MjolLoader: React.FC<TMjolLoaderProps> = ({size = 30}) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <motion.div
                style={{
                    border: "4px solid #f3f3f3", /* Light grey */
                    borderTop: "4px solid #3498db", /* Blue */
                    borderRadius: '50%',
                    width: size,
                    height: size,
                }}
                initial={{
                    rotate: 0,
                }}
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeatType: "loop",
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
        </div>
    );
};

export default MjolLoader;