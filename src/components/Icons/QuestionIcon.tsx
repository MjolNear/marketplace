import React from 'react';
import {BsPatchQuestionFill} from "react-icons/bs";
import Tooltip from "../Layout/Tooltip";

interface QuestionIconProps {
    dataFor?: string
    dataTip?: string
    dataHTML?: boolean
}

const QuestionIcon: React.FC<QuestionIconProps> = ({
    dataFor,
    dataTip,
    dataHTML
}) => {
    return (
        <>
            <BsPatchQuestionFill className="fill-gray-600 cursor-pointer focus:ring-0 outline-none border-0"
                                 data-tip={dataTip}
                                 data-for={dataFor}
                                 data-html={dataHTML}
            />
            {dataFor && <Tooltip place="bottom" id={dataFor}/>}
        </>
    );
};

export default QuestionIcon;