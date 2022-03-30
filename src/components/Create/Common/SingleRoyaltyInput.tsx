import React, {memo} from 'react';
import BaseInput, {NoRefInputProps} from "../../Common/Forms/BaseInput";
import InputLabel from "../../Common/Forms/InputLabel";
import IconText from "../../Icons/IconText";
import {GrMoney} from "react-icons/gr";
import QuestionIcon from "../../Icons/QuestionIcon";

interface SingleRoyaltyInputProps {
    accountInputProps: NoRefInputProps,
    percentInputProps: NoRefInputProps,
    accountError?: string
    percentError?: string
}

const SingleRoyaltyInput: React.FC<SingleRoyaltyInputProps> = ({
    accountInputProps,
    percentInputProps,
    percentError,
    accountError,
}) => {
    const label = <IconText icon={<GrMoney/>}
                            text="Royalties"/>

    const tooltip = <QuestionIcon dataHTML={true}
                                  dataFor="mintNftRoyaltiesInfoTooltipId"
                                  dataTip={
                                      `<div>
                                         Total royalties can't be more than 50%.
                                         <div>Leave fields empty if you don't want to add any royalties.</div>
                                      </div>`
                                  }/>

    return (
        <div>
            <InputLabel label={label}
                        description="Given account will receive percent from secondary sales."
                        tooltip={tooltip}
            />
            <div className="inline-flex gap-5 font-archivo text-xs font-semibold mt-2 items-stretch">
                <div className="space-y-1">
                    <div>Account ID</div>
                    <BaseInput placeholder="satoshi.near"
                               error={accountError}
                               {...accountInputProps}
                    />
                </div>
                <div className="space-y-1">
                    <div>% on secondary sales</div>
                    <BaseInput type="number"
                               placeholder="e.g. 5"
                               error={percentError}
                               {...percentInputProps}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(SingleRoyaltyInput)