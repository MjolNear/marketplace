import {ItemMarketStatus} from "../state/transaction/state";
import {Token} from "../business-logic/models/nft";

export const getNftMarketStatus = (accountId: string, token: Token): ItemMarketStatus => {

    const isListed = token.price !== null

    return (accountId === token.ownerId) ?
        isListed
            ? ItemMarketStatus.LISTED
            : ItemMarketStatus.CAN_SELL
        : isListed
            ? ItemMarketStatus.CAN_BUY
            : ItemMarketStatus.FREE
}