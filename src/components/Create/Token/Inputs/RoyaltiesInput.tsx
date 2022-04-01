import React, {useMemo, useState} from 'react';
import SingleRoyaltyInput from "./SingleRoyaltyInput";
import InputLabel from "../../../Common/Forms/InputLabel";
import {BsPatchQuestionFill} from "react-icons/bs";
import Tooltip from "../../../Layout/Tooltip";
import IconText from "../../../Icons/IconText";
import {GrMoney} from "react-icons/gr";
import PlusButton from "../../../Common/Buttons/PlusButton";
import QuestionIcon from "../../../Icons/QuestionIcon";

const RoyaltiesInput = () => {

    // const [forms, setForms] = useState([
    //     <SingleRoyaltyInput/>
    // ])
    //
    // const label = <IconText icon={<GrMoney/>}
    //                         text="Royalties"/>
    //
    // const tooltip = <QuestionIcon dataTip="Provided accounts will receive percent from secondary sales."
    //                               dataFor="mintNftRoyaltiesInfoTooltipId"/>
    //
    // return (
    //     <div className="space-y-2">
    //         <InputLabel label={label}
    //                     description="You can add up to 10 royalty accounts. Total royalties can't be more than 50%"
    //                     tooltip={tooltip}
    //         />
    //         {forms}
    //         {forms.length < 10 && <PlusButton onClick={(e) => {
    //             e.preventDefault()
    //             setForms([...forms, <SingleRoyaltyInput/>])
    //         }}/>}
    //     </div>
    // );
};

export default RoyaltiesInput;