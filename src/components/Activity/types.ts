import {ActivityEventType} from "../../graphql/generated/market-graphql";
import {AccountId, ContractId, Optional, TokenId} from "../../@types/Aliases";

export interface TokenActivityRowProps {
    id: string
    timestamp: string
    eventType: ActivityEventType
    txHash: string
    blockHash: string
    price?: Optional<string>
    owner: {
        id: AccountId
    }
    buyer?: Optional<{
        id: AccountId
    }>
    token: {
        title: string
        tokenId: TokenId
        media?: Optional<string>
    }
    contract: {
        id: ContractId
    }
}