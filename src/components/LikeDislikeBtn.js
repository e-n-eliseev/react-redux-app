import React from "react";
//хуки работы с состоянием
import { useDispatch, useSelector } from "react-redux";
//импортируем actions событий увеличени/уменьшения количества лайков
import { increaseLike, decreaseLike } from "../redux/actions";
import { getLikes } from "../redux/redusersSelectors/likesSelectors";

const LikeDislikeBtn = () => {
    //получаем данные из хранилища
    const likes = useSelector(getLikes)
    const dispatch = useDispatch();
    //функция обработчик события увеличения лайков
    const increaseLikes = () => {
        dispatch(increaseLike())
    }
    //функция обработчик события увеличения лайков
    const decreaseLikes = () => {
        dispatch(decreaseLike())
    }
    return (
        <div className='btn_container'>
            <button className='btn' onClick={() => increaseLikes()}>
                👍</button>
            <p className="likes">Likes: {likes}</p>
            <button className='btn' onClick={() => decreaseLikes()}>👎</button>
        </div>
    )
}

export default LikeDislikeBtn;