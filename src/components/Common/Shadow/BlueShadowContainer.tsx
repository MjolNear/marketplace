import React from 'react';
import {PropsWithChildren} from "../../types";

const BlueShadowContainer: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="overflow-x-hidden w-full">
            <div className="shadow-mjol-base-blue-drop-xl pt-0 mb-12">
                <div className="max-w-screen-1200px mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BlueShadowContainer;