export const SET_PROFILE_HISTORY = "SET_PROFILE_HISTORY"
export const SET_PROFILE_HISTORY_ERROR = "SET_PROFILE_HISTORY_ERROR"
export const SET_PROFILE_HISTORY_FETCHING = "SET_PROFILE_HISTORY_FETCHING"

const setProfileHistory = (history) => ({
    type: SET_PROFILE_HISTORY,
    payload: history
})

const setProfileHistoryError = (isErrorOccurred) => ({
    type: SET_PROFILE_HISTORY_ERROR,
    payload: isErrorOccurred
})

const setProfileHistoryFetching = (isFetching) => ({
    type: SET_PROFILE_HISTORY_FETCHING,
    payload: isFetching
})

const fetchHistory = (accountId) => (dispatch) => {
    dispatch(setProfileHistoryFetching(true))
    // search
}