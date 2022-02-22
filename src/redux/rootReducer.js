//функция создающая комбинированный reducer
import { combineReducers } from "redux";
//импортируем reducers
import likesReducer from "./likesReducer";
import descriptionReducer from "./descriptionReducer";
import commentsReducer from "./commentsReducer";
import additionalReducer from "./additionalReducer";


const rootReduser = combineReducers({
    likesReducer,
    descriptionReducer,
    commentsReducer,
    additionalReducer
})

export default rootReduser;