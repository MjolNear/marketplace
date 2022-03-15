import {ItemMarketStatus} from "../state/transaction/state";
import {AccountId, Optional} from "../business-logic/models/types";

export const getNftMarketStatus = (
    accountId: AccountId,
    ownerId: AccountId,
    price?: Optional<string>
): ItemMarketStatus => {

    const isListed = !!price

    return (accountId === ownerId) ?
        isListed
            ? ItemMarketStatus.LISTED
            : ItemMarketStatus.CAN_SELL
        : isListed
            ? ItemMarketStatus.CAN_BUY
            : ItemMarketStatus.FREE
}