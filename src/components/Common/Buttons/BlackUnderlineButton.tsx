import React, {MouseEventHandler} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import classNames from "../../../utils/css-utils";

interface PropTypes {
    title: string,
    onClick: MouseEventHandler,
    isActive: boolean
}

const BlackUnderlineButton: React.FC<PropTypes> = ({title, onClick, isActive}) => {
    return (
        <div className="flex flex-col gap-1">
            <button onClick={onClick}
                    className={
                        classNames("mx-5 my-1 font-semibold text-md hover:opacity-100",
                            isActive
                                ? "opacity-100"
                                : "opacity-70"
                        )
                    }
            >
                {title}
            </button>
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
                        className="hidden sm:block h-[1.5px] bg-mjol-light-blue rounded-2xl"
                    />
                }
            </AnimatePresence>
        </div>
    );
};

export default BlackUnderlineButton;