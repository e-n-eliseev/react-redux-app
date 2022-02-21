//функция создающая комбинированный reducer
import { combineReducers } from "redux";
//импортируем reducers
import likesReducer from "./likesReducer";
import descriptionReducer from "./descriptionReducer";


const rootReduser = combineReducers({
    likesReducer,
    descriptionReducer
})

export default rootReduser;