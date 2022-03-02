const initialState = {
    menuInfo: [
        {
            id: 0,
            name: '',
            imagePath: '',
            price: 0,
            desc: '',
        }
    ],
    menuItem: [
        {
            id: 1,
            name: "아메리카노",
            imagePath: "1",
            price: 2000,
            desc: "아메리카노 설명"
        },
        {
            id: 2,
            name: "카페라떼",
            imagePath: "2",
            price: 3000,
            desc: "카페라떼 설명"
        },
        {
            id: 3,
            name: "콜드브루",
            imagePath: "3",
            price: 3000,
            desc: "콜드브루 설명"
        },
        {
            id: 4,
            name: "바닐라 라떼",
            imagePath: "4",
            price: 3000,
            desc: "바닐라 라떼 설명"
        }
    ],
    editState: false,
}

export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM'
export const EDIT_STATE_ON = 'EDIT_STATE_ON'
export const EDIT_STATE_OFF = 'EDIT_STATE_OFF'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_STATE_ON:
            return {
                ...state,
                editState: true
            }
        case EDIT_STATE_OFF:
            return {
                ...state,
                editState: false
            }
        case UPDATE_MENU_ITEM:
            console.log('UPDATE_MENU_ITEM actions', action.payload)
            return {
                ...state,
                menuItem: action.payload
            }
        default:
            return state
    }
}

export default reducer