export const CHANGE_PROFILE_TAB = 'CHANGE_PROFILE_TAB'
export const FETCH_MY_NFTS = 'FETCH_MY_NFTS'
export const FETCH_HISTORY = 'FETCH_HISTORY'

export const changeProfileTab = (tab) => ({
    type: CHANGE_PROFILE_TAB,
    tab
})

export const fetchNfts = (nfts) => ({
    type: FETCH_MY_NFTS,
    nfts
})

export const fetchHistory = (history) => ({
    type: FETCH_HISTORY,
    history
})