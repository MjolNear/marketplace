import {NetworkEnv} from "../enviroment/network";

const nearAPI = require('near-api-js')

const getAccount = (network: NetworkEnv) => {
    const provider = new nearAPI.providers.JsonRpcProvider(`https://rpc.${network}.near.org`)
    return new nearAPI.Account({provider})
}

export const mainnetAccount = () => {
    return getAccount(NetworkEnv.MAINNET)
}
export const testnetAccount = () => {
    return getAccount(NetworkEnv.TESTNET)
}