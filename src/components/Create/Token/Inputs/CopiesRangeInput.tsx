import React from 'react';
import {InputLabel, RangeInput} from "../../../../@UI/Forms";
import QuestionIcon from "../../../Icons/QuestionIcon";
import {useFormContext} from "react-hook-form";

const CopiesRangeInput: React.FC = () => {

    const {register, watch} = useFormContext<{ copies: number }>()

    return (
        <div>
            <InputLabel label={`NFT copies: ${watch("copies")}`}
                        description="The number of items that will be minted"
                        descriptionTooltip={<QuestionIcon
                            dataTip="Will be minted as a series of NFTs. NFTs will differ only in Token ID."
                            dataFor="mintNftCopiesInfoTooltipId"/>
                        }
            />
            <RangeInput min={1}
                        max={20}
                        {...register("copies", {
                            min: 1,
                            max: 20
                        })}
            />
        </div>
    );
};

export default CopiesRangeInput