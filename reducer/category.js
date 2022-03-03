const initialState = {
    categoryTab: 1
}

export const SET_CATEGORY_TAB = 'SET_CATEGORY_TAB';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_TAB:
            return {
                ...state,
                categoryTab: action.payload
            }
        default:
            return state
    }
}

export default reducer