import React, {memo} from 'react';
import {TContractResponse} from "../../../../near/api/types/response/contracts";
import {ApprovedToken} from "../../../../@types/Token";
import {ItemMarketStatus, useNftMarketStatus} from "../../../../hooks/useNftMarketStatus";
import {ContractVerificationStatus} from "../../../../@types/Contract";
import NftContractNotSupported from "../MarketStatus/NftContractNotSupported";
import BuyNftContainer from "../MarketStatus/BuyNftContainer";
import SellNftContainer from "../MarketStatus/SellNftContainer";
import UnlistNftContainer from "../MarketStatus/UnlistNftContainer";
import NotListedNftContainer from "../MarketStatus/NotListedNftContainer";
import withAuthData, {TAuthProps} from "../../../../hoc/withAuthData";
import NftNotApproved from "../MarketStatus/NftNotApproved";
import PriceConnectWalletContainer from "../MarketStatus/PriceConnectWalletContainer";
import ConnectWalletButton from "../MarketStatus/ConnectWalletButton";

interface TTokenMarketStatusBlockProps {
    token: ApprovedToken
    contract?: TContractResponse
    payouts?: Record<string, number>
}

const TokenMarketStatus: React.FC<TTokenMarketStatusBlockProps & TAuthProps> = ({
    token,
    contract,
    payouts,
    accountId
}) => {
    const nftMarketStatus = useNftMarketStatus(accountId, token.ownerId, token.isApproved, token.price)

    if (!contract || contract.verification === ContractVerificationStatus.NotSupported) {
        return <NftContractNotSupported missedNeps={contract?.missedNeps}/>
    }

    switch (nftMarketStatus) {
        case ItemMarketStatus.LISTED_AUTH_REQUIRED:
            return <PriceConnectWalletContainer tokenPrice={token.price}/>
        case ItemMarketStatus.NOT_LISTED_AUTH_REQUIRED:
            return <ConnectWalletButton/>
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
                                       media={token.media}
                                       payouts={payouts || {}}
            />
        case ItemMarketStatus.NOT_APPROVED:
            return <NftNotApproved contractId={token.contractId}
                                   tokenId={token.tokenId}
            />
        case ItemMarketStatus.FREE:
            return <NotListedNftContainer/>
    }
};

export default memo(withAuthData(TokenMarketStatus));