import React, {MouseEventHandler} from 'react';
import classNames from "../../../utils/css-utils";
import AnimatedBlueUnderline from "../Animation/AnimatedBlueUnderline";

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
                        classNames("mx-1 sm:mx-5 my-1 font-archivo text-md font-bold hover:opacity-100",
                            isActive
                                ? "opacity-100"
                                : "opacity-60"
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