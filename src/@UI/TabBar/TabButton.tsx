import React from 'react';
import classNames from "../../utils/css-utils";
import AnimatedBlueUnderline from "../../components/Common/Animation/AnimatedBlueUnderline";
import {TabButtonProps} from "./types";


const TabButton: React.FC<TabButtonProps> = ({
    title,
    onClick,
    isActive
}) => {
    return (
        <div className="flex flex-col gap-1">
            <button onClick={onClick}
                    className={
                        classNames(
                            "my-1 mx-2 font-archivo text-sm font-bold",
                            isActive
                                ? "text-mjol-tab-blue"
                                : "text-mjol-secondary hover:text-blue-400"
                        )
                    }
            >
                {title}
            </button>
            <AnimatedBlueUnderline isActive={isActive}/>
        </div>
    );
};

export default TabButton;