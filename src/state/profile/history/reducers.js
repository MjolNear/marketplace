const initialState = {
    history: [],
    fetching: false,
    error: false
}

export const profileHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY:
            return {
                ...state,
                history: action.payload
            }

    }
}