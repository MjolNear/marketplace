const initialState = {
    tabs: {
        explore: [
            {name: 'NFTs', path: '/nft'},
            {name: 'Collections', path: '/collections'},
        ],
        create: [
            {name: 'NFT', path: '/create-nft'},
            {name: 'Collection', path: '/create-collection'}
        ],
        profile: [
            {name: 'My NFTs', path: '/me/nft'},
            {name: 'My Collections', path: '/me/collection'},
            {name: 'Sign out', path: '/logout'}
        ],
        single: [
            {name: 'Launchpad', path: '/launchpad'},
            {name: 'Docs', path: '/docs'}
        ]
    }
}

export const navbarReducer = (state = initialState, action) => {
    return state
}