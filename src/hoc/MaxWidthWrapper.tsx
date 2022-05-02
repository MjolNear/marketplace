import React from 'react';
import {PropsWithChildren} from "../components/types";

const MaxWidthWrapper: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="max-w-screen-1200px mx-auto">
            {children}
        </div>
    );
};

export default MaxWidthWrapper;