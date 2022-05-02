import React from 'react';
import {CardSize, useCardSize} from "../../../context/CardSizeContext";
import classNames from "../../../utils/css-utils";

interface TTitleBlockProps {
    title: string,
}

const TitleBlock: React.FC<TTitleBlockProps> = ({title}) => {
    const size = useCardSize()
    return (
        <div className={classNames(
            "font-extrabold font-archivo text-black truncate",
            size === CardSize.Big ? "text-md" : "text-[13px]"
        )}>
            {title}
        </div>
    );
};

export default TitleBlock;