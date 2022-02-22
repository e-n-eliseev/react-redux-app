//импортируем actions комментариев
import { updateComment, deleteComment } from "../redux/actions";
//импортируем хук работы с состоянием компонента
import { useState } from "react";
//импортируем хуки работы с хранилищем
import { useDispatch } from "react-redux";

const Comment = ({ item }) => {
    //состояние поля ввода
    const [comment, setCommnent] = useState(item.text);
    //состояние изменения
    const [isChanging, setIsChanging] = useState(false);
    //функция изменяющая состояние поля ввода при введении правок в комментарий
    const onInputComment = (event) => {
        setCommnent(event.target.value);
        setIsChanging(true);
    }
    const dispatch = useDispatch();
    //функция изменяющая комментарий в хранилище
    const onChangeComment = (event) => {
        event.preventDefault();
        dispatch(updateComment(item.id, comment));
        setIsChanging(false);
    }
    //функция удаляющая комментарий в хранилище
    const onDeleteComment = (event) => {
        event.preventDefault();
        dispatch(deleteComment(item.id));
    }

    return (
        <li >
            <form className="form" onSubmit={onChangeComment}>
                <input
                    className='description'
                    value={comment}
                    type='text'
                    placeholder="Please type a new comment"
                    onChange={onInputComment}
                />
                {/*создаем скрытый инпут для отправки формы при нажатии на ENTER*/}
                <input type='submit' hidden />
                <button type='submit' className='delete_btn' onClick={onDeleteComment} >
                    &times;
                </button>
                <button type="submit" className={isChanging ? "delete_btn_form" : "delete_btn_form hidden"} >✓</button>
            </form>
        </li>

    )
}

export default Comment;