import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import InputPriceModal from "./sell/InputPriceModal";
import {ApprovedToken} from "../../../../business-logic/models/nft";
import {giveApprove} from "../../../../business-logic/near/api/market/transaction";
import Tooltip from "../../../Layout/Tooltip";

interface TSellNftProps {
    token: ApprovedToken
    payouts: Record<string, number>
}


const SellNftContainer: React.FC<TSellNftProps> = ({
    token,
    payouts
}) => {

    const [visible, setVisible] = useState(false)

    const sell = (price: string) => giveApprove(token.contractId, token.tokenId, price, token)

    return (
        <div>
            <p className="w-full cursor-pointer"
               data-for="fixingMarketBugsIdSell"
               data-tip="We are Fixing bugs:) Will be available soon! Stay tuned! You can unlist your NFT anytime you want"
            >
                <DarkBlueGradientButton title="Place NFT on market"
                                        disabled={true}
                                        onClick={() => setVisible(true)}
                />
                <Tooltip id="fixingMarketBugsIdSell" place="bottom"/>
            </p>
            {visible &&
                <InputPriceModal close={() => setVisible(false)}
                                 onClick={sell}
                                 payouts={payouts}
                                 imgSrc={token.media}
                />
            }
        </div>
    );
};

export default SellNftContainer;