export const fetchNftContracts = (accountId: string): Promise<string[]> =>
    fetch(`https://helper.mainnet.near.org/account/${accountId}/likelyNFts`)
        .then(response => response.json())
        .catch(() => [])