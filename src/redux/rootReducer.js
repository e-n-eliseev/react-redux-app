//функция создающая комбинированный reducer
import { combineReducers } from "redux";
//импортируем reducers
import likesReducer from "./reducers/likesReducer";
import descriptionReducer from "./reducers/descriptionReducer";
import commentsReducer from "./reducers/commentsReducer";
import additionalReducer from "./reducers/additionalReducer";


const rootReduser = combineReducers({
    likesReducer,
    descriptionReducer,
    commentsReducer,
    additionalReducer
})

export default rootReduser;