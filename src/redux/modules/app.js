const initalState = {
    error: null
}

export const types = {
    CLEAR_ERROR: "APP/CLEAR_ERROR"
}

// action creators
export const actions = {
    clearError: () => ({
        type: types.CLEAR_ERROR
    })
}

const reducer = (state = initalState, action) => {
    const {
        error,
        type
    } = action;
    if (type === types.CLEAR_ERROR) {
        return {
            ...state,
            error: null
        };
    } else if (error) {
        return {
            ...state,
            error
        }
    }
    return state;
}

export default reducer;

// selectors
export const getError = (state) => {
    return state.app.error;
}