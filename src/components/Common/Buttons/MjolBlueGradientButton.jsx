import React from 'react';
import classNames from "../../../utils/css-utils";
import DarkBlueMjolText from "../Text/DarkBlueMjolText";

const MjolBlueGradientButton = ({title, onClick, isActive = true}) => {

    return (
        <button onClick={onClick}
                className={
                    classNames(isActive
                            ? "from-blue-500 to-blue-800"
                            : "hover:shadow-mjol-blue-button hover:ring-1 hover:ring-inset hover:ring-blue-400"
                        ,
                        "bg-gradient-to-l from-transparent to-transparent rounded-lg group px-6 py-1 transform duration-200"
                    )
                }
        >
            {isActive
                ? <div className="text-black font-extrabold">{title}</div>
                : <DarkBlueMjolText text={title}/>
            }
        </button>
    );
};

export default MjolBlueGradientButton;