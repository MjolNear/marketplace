import React from 'react';
import {PropsWithChildren} from "../../../types";

const RoundedSizeWrapperContainer: React.FC<PropsWithChildren<{ classes?: string }>> = ({
    classes,
    children
}) => {
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default RoundedSizeWrapperContainer;