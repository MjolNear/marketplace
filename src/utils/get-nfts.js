module.exports = {getNFTs};
const nearApi = require("near-api-js");

async function getNFTContractsByWallet(accountId) {
    try {
        const res = await fetch('https://helper.' + (accountId.substr(-5) === '.near' ? 'mainnet' : 'testnet')
            + '.near.org/account/' + accountId + '/likelyNFTs', {timeout: 30000});
        if (res.status < 199 || res.status > 299) {
            return {error: res.statusText + ' (' + res.status + ')'}
        }
        const text = await res.text();
        try {
            return JSON.parse(text)
        } catch (err) {
            return {error: text}
        }
    } catch (err) {
        return {error: err}
    }
}

async function getNFTs(accountId) {
    const res = await getNFTContractsByWallet(accountId);
    if (res.error){
        console.log("ERROR");
        return
    }
    console.log(res);
}

getNFTs('turk.near');
