import React, {memo} from 'react';
import {Optional} from "../../../../../@types/Aliases";
import {Img} from "react-image";

interface TFormImagePreview {
    link?: Optional<string>
}

const TokenFormImagePreview: React.FC<TFormImagePreview> = ({
    link
}) => {
    return (
        <Img src={link || ""}
             alt="loading"
             className="hidden sm:block rounded-2xl object-contain aspect-1"
        />
    );
};

export default memo(TokenFormImagePreview);