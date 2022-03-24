export enum ItemMarketStatus {
    // Item is owned by current user and listed on transaction.
    LISTED = "LISTED",

    // Item is owned by current user and not listed on transaction.
    CAN_SELL = "CAN_SELL",

    // Item is owned by another user and listed on transaction
    CAN_BUY = "CAN_BUY",

    // Item is owned by another user and not listed on transaction.
    FREE = "FREE",

    // Item has been transferred or sold on other marketplace and lose approvals for MjolNear marketplace
    NOT_APPROVED = "NOT_APPROVED",

    // Item is listed but current user not authenticated
    LISTED_AUTH_REQUIRED = "LISTED_AUTH_REQUIRED",

    // Item is not listed and current user not authenticated
    NOT_LISTED_AUTH_REQUIRED = "NOT_LISTED_AUTH_REQUIRED"
}


export interface TransactionStatus {
    pending: boolean | undefined,
    success: boolean | undefined
}