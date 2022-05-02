import React from 'react';
import {PropsWithChildren} from "../../../types";

const PreviewCreatedItemContainer: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="lg:flex-grow-[3] lg:flex-shrink-0 lg:basis-0">
            <div className="lg:ml-10 lg:sticky lg:top-[200px] h-fit w-full flex justify-center">
                {children}
            </div>
        </div>
    );
};

export default PreviewCreatedItemContainer;