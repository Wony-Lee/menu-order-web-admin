const initialState = {
    updateState: false,
    // menuList: {}
}

export const MENU_UPDATE_ON = 'MENU_UPDATE_ON'
export const MENU_UPDATE_OFF = 'MENU_UPDATE_OFF'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_UPDATE_ON:
            return {
                ...state,
                updateState: true
            }
        case MENU_UPDATE_OFF:
            console.log('payload ==> ', action.payload)
            return {
                ...state,
                updateState: false,
                // menuList: action.payload
            }
        default:
            return state
    }
}

export default reducer