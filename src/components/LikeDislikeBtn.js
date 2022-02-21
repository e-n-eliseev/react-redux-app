import React from "react";
//хуки работы с состоянием
import { useDispatch, useSelector } from "react-redux";
//импортируем actions событий увеличени/уменьшения количества лайков
import { like, dislike } from "../redux/actions";

const LikeDislikeBtn = () => {
    //получаем данные из хранилища
    const likes = useSelector(state => {
        const { likesReducer } = state;
        return likesReducer.likes;
    })
    //создаем reducer
    const dispatch = useDispatch();
    //функция обработчик события увеличения лайков
    const increaseLikes = () => {
        dispatch(like())
    }
    //функция обработчик события увеличения лайков
    const decreaseLikes = () => {
        dispatch(dislike())
    }
    return (
        <div className='btn_container'>
            <button className='btn' onClick={() => increaseLikes()}>
                &hearts;</button>
            <p className="likes">Likes: {likes}</p>
            <button className='btn' onClick={() => decreaseLikes()}>👎</button>
        </div>
    )
}

export default LikeDislikeBtn;