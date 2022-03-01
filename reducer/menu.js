const initialState = {
    menuInfo: [
        {
            id: 0,
            name: '',
            imagePath: '',
            price: 0,
            desc: '',
        }
    ]
}

export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MENU_ITEM:
            console.log('UPDATE_MENU_ITEM actions', action.payload)
            return {
                ...state,
                menuText: action.payload
            }
        default:
            return state
    }
}

export default reducer