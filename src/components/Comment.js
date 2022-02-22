//импортируем actions комментариев
import { updateComment, deleteComment, errorON } from "../redux/actions";
//импортируем хук работы с состоянием компонента
import { useState, useEffect } from "react";
//импортируем хуки работы с хранилищем
import { useDispatch, useSelector } from "react-redux";

const Comment = ({ item }) => {
    //получаем данные из хранилища
    const error = useSelector(state => {
        const { additionalReducer } = state;
        return additionalReducer.error;
    })
    //текущее состояние поля ввода
    const [comment, setCommnent] = useState(item.text);
    //предыдущее состояние поля ввода
    const [commentOld] = useState(item.text);
    //состояние изменения
    const [isChanging, setIsChanging] = useState(false);
    //проверка на наличие ошибки, если есть, то восстанавливаем предыдущее значение
    useEffect(() => {
        setCommnent(commentOld);
        setIsChanging(false);
    }, [error])
    //функция изменяющая состояние поля ввода при введении правок в комментарий
    const onInputComment = (event) => {
        setCommnent(event.target.value);
        setIsChanging(true);
    }
    const dispatch = useDispatch();
    //функция изменяющая комментарий в хранилище
    const onChangeComment = (event) => {
        event.preventDefault();
        if (comment) {
            dispatch(updateComment(item.id, comment));
            setIsChanging(false);
        } else {
            dispatch(errorON("Комментарий не должен быть пустым!"));
            // setCommnent(commentOld);
            // setIsChanging(false);
        }

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