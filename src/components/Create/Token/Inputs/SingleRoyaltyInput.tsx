import React, {memo} from 'react';
import {InputLabel, BaseInput} from "../../../../@UI/Forms";
import IconText from "../../../Icons/IconText";
import {GrMoney} from "react-icons/gr";
import QuestionIcon from "../../../Icons/QuestionIcon";
import {useFormContext} from "react-hook-form";
import {NEAR_ACCOUNT_REGEX, TokenRoyaltyInput} from "../../../../@types/Form";


const SingleRoyaltyInput: React.FC = () => {

    const {register, formState} = useFormContext<{ royalty: TokenRoyaltyInput }>()

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
                        description="Given account will receive percent from secondary sales"
                        descriptionTooltip={tooltip}
            />
            <div className="inline-flex gap-5 font-archivo text-xs font-semibold mt-2 items-stretch">
                <div className="space-y-1">
                    <div>Account ID</div>
                    <BaseInput placeholder="satoshi.near"
                               error={formState.errors.royalty?.account?.message}
                               {...register("royalty.account", {
                                   pattern: {
                                       value: NEAR_ACCOUNT_REGEX,
                                       message: "Invalid NEAR Account ID"
                                   }
                               })}
                    />
                </div>
                <div className="space-y-1">
                    <div>% on secondary sales</div>
                    <BaseInput type="number"
                               placeholder="e.g. 5"
                               error={formState.errors.royalty?.percent?.message}
                               {...register("royalty.percent", {
                                   valueAsNumber: true,
                                   min: {
                                       value: 0,
                                       message: "Royalty must be non negative"
                                   },
                                   max: {
                                       value: 50,
                                       message: "50% is the maximum amount for royalties"
                                   }
                               })}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(SingleRoyaltyInput)