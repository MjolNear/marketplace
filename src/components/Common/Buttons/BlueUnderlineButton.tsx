import React, {MouseEventHandler} from 'react';
import classNames from "../../../utils/css-utils";
import AnimatedBlueUnderline from "../../../@UI/Animation/AnimatedBlueUnderline";

interface PropTypes {
    title: string,
    onClick: MouseEventHandler,
    isActive: boolean
}

const BlueUnderlineButton = React.memo<PropTypes>( ({title, onClick, isActive}) => {

    return (
        <div className="flex flex-col gap-1">
            <button onClick={onClick}
                    className={
                        classNames("my-1 mx-3 font-archivo text-sm font-bold",
                            isActive
                                ? "text-mjol-tab-blue"
                                : "text-gray-500 hover:text-blue-400"
                        )
                    }
            >
                {title}
            </button>
            <AnimatedBlueUnderline isActive={isActive}/>
        </div>
    );
});

export default BlueUnderlineButton;