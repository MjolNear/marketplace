import React from 'react';
import classNames from "../../../utils/css-utils";
import styles from "../../../css/animation.module.css"

const MjolHoverBlackButton = ({title, isActive, onClick}) => {

    return (
        <button onClick={onClick}
                className={
                    classNames(isActive
                            ? "from-blue-500 to-blue-800"
                            : "hover:shadow-mjol-blue-button hover:ring-1 hover:ring-inset hover:ring-blue-400"
                        , "bg-gradient-to-l from-white to-white rounded-3xl group px-10 py-2 transform duration-200"
                    )
                }
        >
            <div className={classNames(!isActive
                    ? ""
                    : "text-white",
                "text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 to-blue-800"
            )
            }>
                {title}
            </div>
        </button>
    );
};

export default MjolHoverBlackButton;