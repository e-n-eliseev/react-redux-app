//импортируем типы событий
import {
    LIKE,
    DISLIKE,
    DESCRIPTION,
    ADD_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    LOAD_COMMENT,
    LOADING_ON,
    LOADING_OFF,
    ERROR_ON,
    ERROR_OFF
} from './types'

//создаем action для  события увеличения/уменьшения лайков
export const increaseLike = () => {
    return {
        type: LIKE
    }
}
export const decreaseLike = () => {
    return {
        type: DISLIKE
    }
}
//создаем action события добавления описания к фото
export const addDescription = (text) => {
    return {
        type: DESCRIPTION,
        text
    }
}
//создаем action загрузки данных
export const loadingON = () => {
    return {
        type: LOADING_ON
    }
}
export const loadingOFF = () => {
    return {
        type: LOADING_OFF
    }
}
//создаем action ошибки
export const errorON = (text) => {
    return dispatch => {
        dispatch({
            type: ERROR_ON,
            text
        });
        //убираем сообщение об ошибке через 2 сек
        setTimeout(() => {
            dispatch(errorOFF())
        }, 2000)
    }
}
export const errorOFF = () => {
    return {
        type: ERROR_OFF
    }
}

//создаем action события добавления комментария
export const loadComment = () => {
    return async dispatch => {
        try {
            dispatch(loadingON());
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const loadedData = await response.json();
            //таймаут введен для наглядности загрузки
            setTimeout(() => {
                dispatch({
                    type: LOAD_COMMENT,
                    data: loadedData
                });
                dispatch(loadingOFF())
            }, 1500)
        } catch (error) {
            //таймаут введен для наглядности
            setTimeout(() => {
                dispatch(loadingOFF())
                dispatch(errorON("Ошибка загрузки данных с сервера"));
            }, 1500)
        }
    }
}
//создаем action события добавления комментария
export const addComment = (id, text) => {
    return {
        type: ADD_COMMENT,
        data: { id, text }
    }
}
//создаем action события обновления комментария
export const updateComment = (id, text) => {
    return {
        type: UPDATE_COMMENT,
        data: { id, text }
    }
}
//создаем action события удаления комментария
export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}