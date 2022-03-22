import React from 'react';
import {TContractResponse} from "../../../../business-logic/near/api/types/response/contracts";
import {ApprovedToken} from "../../../../business-logic/models/nft";
import {useNftMarketStatus} from "../../../../hooks/useNftMarketStatus";
import {ContractVerificationStatus} from "../../../../business-logic/models/contract";
import NftContractNotSupported from "../MarketStatus/NftContractNotSupported";
import {ItemMarketStatus} from "../../../../state/transaction/state";
import BuyNftContainer from "../MarketStatus/BuyNftContainer";
import SellNftContainer from "../MarketStatus/sell/SellNftContainer";
import UnlistNftContainer from "../MarketStatus/UnlistNftContainer";
import NotListedNftContainer from "../MarketStatus/NotListedNftContainer";
import ConnectWalletButton from "../MarketStatus/ConnectWalletButton";
import withAuthData, {TAuthProps} from "../../../../hoc/withAuthData";
import NftNotApproved from "../MarketStatus/NftNotApproved";

interface TTokenMarketStatusBlockProps {
    token: ApprovedToken
    contract?: TContractResponse
    payouts?: Record<string, number>
}

const TokenMarketStatus: React.FC<TTokenMarketStatusBlockProps & TAuthProps> = ({
    token,
    contract,
    payouts,
    isSignedIn,
    accountId
}) => {
    const nftMarketStatus = useNftMarketStatus(accountId, token.ownerId, token.isApproved, token.price)

    if (!isSignedIn) {
        return <ConnectWalletButton/>
    }

    if (!contract || contract.verification === ContractVerificationStatus.NotSupported) {
        return <NftContractNotSupported missedNeps={contract?.missedNeps}/>
    }

    switch (nftMarketStatus) {
        case ItemMarketStatus.CAN_BUY:
            return <BuyNftContainer tokenPrice={token.price}
                                    contractId={token.contractId}
                                    tokenId={token.tokenId}
                                    hasPayouts={contract?.hasPayouts}
            />
        case ItemMarketStatus.CAN_SELL:
            return <SellNftContainer token={token}
                                     payouts={payouts || {}}
            />
        case ItemMarketStatus.LISTED:
            return <UnlistNftContainer tokenPrice={token.price}
                                       contractId={token.contractId}
                                       tokenId={token.tokenId}
            />
        case ItemMarketStatus.NOT_APPROVED:
            return <NftNotApproved contractId={token.contractId}
                                   tokenId={token.tokenId}
            />
        case ItemMarketStatus.FREE:
            return <NotListedNftContainer/>
    }
};

export default withAuthData(TokenMarketStatus);