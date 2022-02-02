import {ItemMarketStatus} from "../state/transaction/state";
import {Nft} from "../business-logic/models/nft";

export const getNftMarketStatus = (accountId: string, nft: Nft): ItemMarketStatus => {

    const isListed = nft.price !== null

    return (accountId === nft.ownerId) ?
        isListed
            ? ItemMarketStatus.LISTED
            : ItemMarketStatus.CAN_SELL
        : isListed
            ? ItemMarketStatus.CAN_BUY
            : ItemMarketStatus.FREE
}