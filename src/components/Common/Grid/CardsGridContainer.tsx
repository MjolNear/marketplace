import React from 'react';
import {PropsWithChildren} from "../../types";
import {CardSize, useCardSize} from "../../../context/CardSizeContext";
import classNames from "../../../utils/css-utils";

const CardsGridContainer: React.FC<PropsWithChildren> = ({
    children
}) => {
    const size = useCardSize()
    return (
        <div className={classNames(
            "grid justify-center gap-4 md:gap-5 2xl:gap-8",
            size === CardSize.Big
                ? "grid-cols-1 xxs:grid-cols-[repeat(auto-fit,_300px)] px-8 md:px-5"
                : "grid-cols-[repeat(auto-fit,_180px)] xs:grid-cols-[repeat(auto-fit,_200px)] gap-4 px-1 xs:px-4 md:px-8"
        )}
        >
            {children}
        </div>
    );
};

export default CardsGridContainer;