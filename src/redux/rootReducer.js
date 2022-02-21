//функция создающая комбинированный reducer
import { combineReducers } from "redux";
//импортируем reducers
import { likesReducer } from "./likesReducer";


const rootReduser = combineReducers({
    likesReducer,
})

export default rootReduser;