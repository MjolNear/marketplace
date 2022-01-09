export const fetchNftContracts = async (accountId: number): Promise<string[]> => {
    const response = await fetch(`https://helper.mainnet.near.org/account/${accountId}/likelyNFts`)
    if (!response.ok) {
        return []
    }
    return await response.json()
}