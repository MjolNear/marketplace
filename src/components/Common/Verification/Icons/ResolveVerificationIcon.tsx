import React from 'react';
import {ContractVerificationStatus} from "../../../../business-logic/types/contract";
import {IconProps} from "../../../Icons/IconProps";
import VerifiedIcon from "./VerifiedIcon";
import UnverifiedIcon from "./UnverifiedIcon";
import NotSupportedIcon from "./NotSupportedIcon";

interface PropTypes {
    verification?: ContractVerificationStatus,
    iconProps?: IconProps,
}

const ResolveVerificationIcon: React.FC<PropTypes> = ({
    verification,
    iconProps,
}) => {
    switch (verification) {
        case ContractVerificationStatus.Verified:
            return <VerifiedIcon {...iconProps}/>
        case ContractVerificationStatus.Unverified:
            return <UnverifiedIcon {...iconProps}/>
        case ContractVerificationStatus.NotSupported:
            return <NotSupportedIcon {...iconProps}/>
        default:
            return <UnverifiedIcon {...iconProps}/>
    }
};

export default ResolveVerificationIcon;