const initialState = {
    categoryTab: 1,
    itemTab: 1
}

export const SET_CATEGORY_TAB = 'SET_CATEGORY_TAB'
export const SET_ITEM_TAB = 'SET_ITEM_TAB'

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_TAB:
            return {
                ...state,
                categoryTab: action.payload
            }
        case SET_ITEM_TAB:
            console.log('itemTab', action.payload)
            return {
                ...state,
                itemTab: action.payload
            }
        default:
            return state
    }
}

export default reducer