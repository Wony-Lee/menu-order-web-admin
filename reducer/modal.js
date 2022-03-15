const initialState = {
    modalState: false
}

export const DEFAULT_MODAL_ON = 'DEFAULT_MODAL_ON'
export const DEFAULT_MODAL_OFF = 'DEFAULT_MODAL_OFF'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEFAULT_MODAL_ON:
            return {
                ...state,
                modalState: true,
            }
        case DEFAULT_MODAL_OFF:
            return {
                ...state,
                modalState: false,
            }
        default:
            return state;
    }
}

export default reducer;