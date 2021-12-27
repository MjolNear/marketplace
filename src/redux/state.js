export const state = {
    navigationBar: {
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
    },
    profilePage: {
        tabs: [
            {name: 'My NFT', path: '/profile-nft/all'},
            {name: 'My Listed NFT', path: '/profile-nft/listed'},
            {name: 'My Minted NFT', path: '/profile-nft/minted'},
            {name: 'My History', path: '/profile-nft/history'},
        ]
    },
    mainPage: {},
    createPage: {},
    explorePage: {},
    launchpadPage: {},
    docsPage: {},
}