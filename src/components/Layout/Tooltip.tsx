import React from 'react';
import ReactTooltip from "react-tooltip";
import ReactDOMServer from 'react-dom/server'
import {ContractVerificationStatus} from "../../business-logic/types/contract";

interface TooltipProps {
    id: string
    className?: string
    place?: "left" | "right" | "top" | "bottom"
    effect?: "solid" | "float"
}

const Tooltip: React.FC<TooltipProps> = ({
    id,
    className = "font-extrabold",
    place = "right",
    effect = "solid"
}) => {
    return (
        // @ts-ignore
        <ReactTooltip effect={effect}
                      place={place}
                      className={className + " tooltip"}
                      id={id}
                      backgroundColor="rgb(5, 17, 29)"
                      delayShow={50}/>
    );
};

export const getContractVerificationTooltipContent = (verification: ContractVerificationStatus): string => {
    switch (verification) {
        case ContractVerificationStatus.NotSupported:
            return "Contract not supported due to some missed NFT standards"
        case ContractVerificationStatus.Unverified:
            return ReactDOMServer.renderToString(
                <>
                    <div>Currently contract is not verified.</div>
                    <div>Use it on you own risk!</div>
                </>
            )
        case ContractVerificationStatus.Verified:
            return "Contract is verified by MjolNear"
    }
}

export default Tooltip;