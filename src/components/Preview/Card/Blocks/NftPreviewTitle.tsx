import React from 'react';
import {ContractVerificationStatus} from "../../../../business-logic/models/contract";
import ResolveVerificationIcon from "../../../Common/Verification/Icons/ResolveVerificationIcon";
import ReactTooltip from "react-tooltip";

interface PropTypes {
    title: string,
    verification?: ContractVerificationStatus
}

const NftPreviewTitle = React.memo<PropTypes>(({title, verification}) => {
    return (
        <div className="inline-flex items-center gap-2 font-extrabold font-archivo text-black text-lg md:text-xl">
            {title}
            <ResolveVerificationIcon verification={verification}
                                     iconProps={{size: 18}}/>
        </div>
    );
});

export default NftPreviewTitle;