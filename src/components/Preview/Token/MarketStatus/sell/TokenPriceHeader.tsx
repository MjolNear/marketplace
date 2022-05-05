import React, {memo} from 'react';
import GradientText from "../../../../Common/Text/GradientText";

interface TTokenPriceHeaderProps {
    headerText: string,
}

const TokenPriceHeader: React.FC<TTokenPriceHeaderProps> = ({
    headerText,
}) => {
    return (
        <GradientText text={headerText}
                      size="2xl"
                      fontWeight="extrabold"
                      extraClasses="bg-gradient-to-r from-blue-700 to-blue-400 mb-3"
        />
    );
};

export default memo(TokenPriceHeader);