export const BUY_NFT = "BUY_NFT"
export const SELL_NFT = "SELL_NFT"

export const buyNft = (id) => ({
    action: BUY_NFT,
    id
})

export const sellNft = (id) => ({
    action: SELL_NFT,
    id
})