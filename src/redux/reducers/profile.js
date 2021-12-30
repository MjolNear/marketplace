const initialState = {
    tabs: [
        {name: 'My NFT', path: '/profile-nft/all'},
        {name: 'My Listed NFT', path: '/profile-nft/listed'},
        {name: 'My History', path: '/profile-nft/history'},
    ]
}

export const profileReducer = (state = initialState, action) => {
    return state
}