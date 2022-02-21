//импортируем типы событий
import { LIKE, DISLIKE } from './types'

//создаем action для  события увеличения/уменьшения лайков
export const like = () => {
    return {
        type: LIKE
    }
}
export const dislike = () => {
    return {
        type: DISLIKE
    }
}