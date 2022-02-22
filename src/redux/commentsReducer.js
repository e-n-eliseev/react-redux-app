//импортируем типы событий
import { DELETECOMMENT, ADDCOMMENT, UPDATECOMMENT } from "./types";


const initialState = {
    comments: [
        { id: 1, text: "Вася" },
        { id: 2, text: "Вася" },
        { id: 3, text: "Вася" },
        { id: 4, text: "Вася" },
        { id: 5, text: "Вася" },
    ]
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDCOMMENT:
            return {
                ...state,
                comments: [...state.comments, action.data]
            };
        case UPDATECOMMENT:
            const { data } = action;
            const { comments } = state;
            const changeId = comments.findIndex(item => item.id === data.id);
            comments.splice(changeId, 1, data);
            return {
                ...state,
                comments
            };
        case DELETECOMMENT:
            //используем IIFE для инкапсуляции переменных, чтобы избежать 
            //конфликта с UPDATECOMMENT
            return (() => {
                const { comments } = state;
                const delId = comments.findIndex(item => item.id === action.id);
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