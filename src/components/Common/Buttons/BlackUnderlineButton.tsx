import React, {MouseEventHandler} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import classNames from "../../../utils/css-utils";
import {Link} from "react-router-dom";

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
                        classNames("mx-5 my-1 font-archivo text-md font-bold hover:opacity-100",
                            isActive
                                ? "opacity-100"
                                : "opacity-60"
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
                        className="hidden sm:block h-[2px] bg-blue-500 rounded-t-[2px]"
                    />
                }
            </AnimatePresence>
        </div>
    );
};

export default BlackUnderlineButton;