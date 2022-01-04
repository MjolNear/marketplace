const nearApi = require("near-api-js");

export class NftAPI {

    static async getJsonByURL(url) {
        try {
            const response = await fetch(url, {timeout: 30000});
            if (!response.ok) {
                return {error: response.statusText + ' (' + response.status + ')'}
            }
            try {
                return await response.json();
            } catch (err) {
                return {error: 'Unable to parse json response'}
            }
        } catch (error) {
            return {error}
        }
    }

    static getNetwork(accountId) {
        return accountId.endsWith('.near')
            ? 'mainnet'
            : 'testnet';
    }

    static buildAccountInfo(accountId) {
        const network = NftAPI.getNetwork(accountId)
        const provider = new nearApi.providers.JsonRpcProvider(`https://rpc.${network}.near.org`);
        return new nearApi.Account(
            {provider: provider}
        )
    }

    static async buildContractInfo(accountId) {
        const network = NftAPI.getNetwork(accountId)
        const accountURL = `https://helper.${network}.near.org/account/${accountId}/likelyNFTs`;
        return await NftAPI.getJsonByURL(accountURL)
    }
}