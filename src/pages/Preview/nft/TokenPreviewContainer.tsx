import React from 'react';
import {PropsWithChildren} from "../../../components/types";

const TokenPreviewContainer: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="max-w-screen-1200px mx-auto pt-5 lg:pt-10">
            <div className="max-w-full flex justify-center">
                {children}
            </div>
        </div>
    );
};

export default TokenPreviewContainer;