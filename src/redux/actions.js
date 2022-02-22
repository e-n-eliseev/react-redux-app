//импортируем типы событий
import {
    LIKE,
    DISLIKE,
    DESCRIPTION,
    ADDCOMMENT,
    DELETECOMMENT,
    UPDATECOMMENT,
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
//создаем action события добавления комментария
export const addComment = (id, text) => {
    return {
        type: ADDCOMMENT,
        data: { id, text }
    }
}
//создаем action события обновления комментария
export const updateComment = (id, text) => {
    return {
        type: UPDATECOMMENT,
        data: { id, text }
    }
}
//создаем action события удаления комментария
export const deleteComment = (id) => {
    return {
        type: DELETECOMMENT,
        id
    }
}