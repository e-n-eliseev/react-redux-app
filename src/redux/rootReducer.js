//функция создающая комбинированный reducer
import { combineReducers } from "redux";
//импортируем reducers
import likesReducer from "./likesReducer";
import descriptionReducer from "./descriptionReducer";
import commentsReducer from "./commentsReducer";


const rootReduser = combineReducers({
    likesReducer,
    descriptionReducer,
    commentsReducer,
})

export default rootReduser;