import React from 'react';
import useComponentVisible from "../../../hooks/useComponentVisible";

const Modal = ({ref, visible}) => {

    return (
        <div className={"bg-red-300 " + visible ? "" : "hidden"}>
            <div className="w-1/2 h-1/2" ref={ref}>
                HI
            </div>
        </div>
    );
};

export default Modal;