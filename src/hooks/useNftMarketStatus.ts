import {ItemMarketStatus} from "../state/transaction/state";
import {AccountId, Optional} from "../business-logic/models/types";

export const useNftMarketStatus = (
    accountId: AccountId,
    ownerId: AccountId,
    isApproved: boolean,
    price?: Optional<string>
): ItemMarketStatus => {

    const isListed = !!price

    if (!accountId) {
        return isListed
            ? ItemMarketStatus.LISTED_AUTH_REQUIRED
            : ItemMarketStatus.NOT_LISTED_AUTH_REQUIRED
    }

    if (isListed && !isApproved) return ItemMarketStatus.NOT_APPROVED

    return (accountId === ownerId) ?
        isListed
            ? ItemMarketStatus.LISTED
            : ItemMarketStatus.CAN_SELL
        : isListed
            ? ItemMarketStatus.CAN_BUY
            : ItemMarketStatus.FREE
}