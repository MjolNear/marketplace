import {NetworkEnv} from "./network";
import {NearConfig} from "near-api-js/lib/near";
import {MARKET_CONTRACT_ID} from "./contract-names";


export interface Config extends NearConfig {
    contractName: string,
    explorerUrl?: string,
    keyPath?: string
}

export const getConfig = (env: NetworkEnv): Config => {
    switch (env) {
        case NetworkEnv.PRODUCTION:
        case NetworkEnv.MAINNET:
            return {
                networkId: 'mainnet',
                nodeUrl: 'https://rpc.mainnet.near.org',
                contractName: MARKET_CONTRACT_ID,
                walletUrl: 'https://wallet.near.org',
                helperUrl: 'https://helper.mainnet.near.org',
                explorerUrl: 'https://explorer.mainnet.near.org',
            };
        case NetworkEnv.DEVELOPMENT:
        case NetworkEnv.TESTNET:
            return {
                networkId: 'testnet',
                nodeUrl: 'https://rpc.testnet.near.org',
                contractName: MARKET_CONTRACT_ID,
                walletUrl: 'https://wallet.testnet.near.org',
                helperUrl: 'https://helper.testnet.near.org',
                explorerUrl: 'https://explorer.testnet.near.org',
            };
        case NetworkEnv.BETANET:
            return {
                networkId: 'betanet',
                nodeUrl: 'https://rpc.betanet.near.org',
                contractName: MARKET_CONTRACT_ID,
                walletUrl: 'https://wallet.betanet.near.org',
                helperUrl: 'https://helper.betanet.near.org',
                explorerUrl: 'https://explorer.betanet.near.org',
            };
        case NetworkEnv.LOCAL:
            return {
                networkId: 'local',
                nodeUrl: 'http://localhost:3030',
                keyPath: `${process.env.HOME}/.near/validator_key.json`,
                walletUrl: 'http://localhost:4000/wallet',
                contractName: MARKET_CONTRACT_ID,
            };
        case NetworkEnv.TEST:
        case NetworkEnv.CI:
            return {
                networkId: 'shared-test',
                nodeUrl: 'https://rpc.ci-testnet.near.org',
                contractName: MARKET_CONTRACT_ID,
                masterAccount: 'test.near',
            };
        case NetworkEnv.CI_BETANET:
            return {
                networkId: 'shared-test-staging',
                nodeUrl: 'https://rpc.ci-betanet.near.org',
                contractName: MARKET_CONTRACT_ID,
                masterAccount: 'test.near',
            };
        default:
            throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
    }
}

// Why do we need that?
// module.exports = getConfig;
