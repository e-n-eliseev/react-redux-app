//импротируем типы событий
import { LIKE, DISLIKE } from "./types";
//задаем начальное состояние 
const initialState = {
    likes: 0,
};
//создаем функцию, изменяющую состояние хранилища
export const likesReducer = (state = initialState, action) => {
    //проверка типа события
    switch (action.type) {
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