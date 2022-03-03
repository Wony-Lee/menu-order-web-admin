import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import menu from './menu'
import category from './category'

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                menu,
                category
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;