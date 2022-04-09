//импротируем типы событий
import { LIKE, DISLIKE } from "../types";
//задаем начальное состояние 
const initialState = {
    likes: 0,
};
//создаем функцию, изменяющую состояние хранилища
const likesReducer = (state = initialState, { type }) => {
    //проверка типа события
    switch (type) {
        case LIKE:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DISLIKE:
            return {
                ...state,
                likes: state.likes - 1
            }

        default:
            return state;
    }
}

export default likesReducer;