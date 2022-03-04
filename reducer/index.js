import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import menu from './menu'
import category from './category'
import adminPost from './adminPost'

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                menu,
                category,
                adminPost
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;