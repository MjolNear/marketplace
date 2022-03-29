import React, {memo} from 'react';
import {NoRefInputProps} from "../../Common/Forms/BaseInput";
import InputLabel from "../../Common/Forms/InputLabel";
import RangeInput from "../../Common/Forms/RangeInput";
import QuestionIcon from "../../Icons/QuestionIcon";

interface CopiesRangeInputProps {
    max: number,
    min: number,
    copies: number,
    inputProps: NoRefInputProps
}

const CopiesRangeInput: React.FC<CopiesRangeInputProps> = ({
    max,
    min,
    copies,
    inputProps
}) => {
    return (
        <div>
            <InputLabel label={`NFT copies: ${copies}`}
                        description="The number of items that will be minted."
                        tooltip={<QuestionIcon dataTip="Will be minted as a series of NFTs. NFTs will differ only in Token ID."
                                               dataFor="mintNftCopiesInfoTooltipId"/>
                        }
            />
            <RangeInput {...inputProps}
                        max={max}
                        min={min}
            />
        </div>
    );
};

export default memo(CopiesRangeInput);