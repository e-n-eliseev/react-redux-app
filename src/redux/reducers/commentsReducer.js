//импортируем типы событий
import { LOAD_COMMENT, DELETE_COMMENT, ADD_COMMENT, UPDATE_COMMENT } from "../types";


const initialState = {
    comments: []
};

const commentsReducer = (state = initialState, { type, data, id }) => {
    switch (type) {
        case LOAD_COMMENT:
            const loadData = data.map(item => {
                return {
                    id: item.id,
                    text: item.name
                }
            })
            return {
                ...state,
                comments: loadData
            };
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, data]
            };
        case UPDATE_COMMENT:
            const newComments = [...state.comments];
            const changeId = newComments.findIndex(item => item.id === data.id);
            newComments.splice(changeId, 1, data);
            return {
                ...state,
                newComments
            };
        case DELETE_COMMENT:
            //используем IIFE для инкапсуляции переменных, чтобы избежать 
            //конфликта с UPDATECOMMENT
            return (() => {
                const { comments } = state;
                const delId = comments.findIndex(item => item.id === id);
                const newComments = [...comments]
                newComments.splice(delId, 1);
                //второй вариант
                // const newComments = [
                //     ...comments.slice(0, changeId),
                //     ...comments.slice(changeId + 1)
                // ]
                return {
                    ...state,
                    comments: newComments
                };
            })();
        default:
            return state;
    }
}

export default commentsReducer;