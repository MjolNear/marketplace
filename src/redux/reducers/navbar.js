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
            {name: 'My NFTs', path: '/profile-nft'},
            {name: 'My Collections', path: '/profile-collection'},
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