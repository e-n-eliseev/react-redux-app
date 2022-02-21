//импортируем типы событий
import {
    LIKE,
    DISLIKE,
    DESCRIPTION
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