//импортируем action создания комментариев
import { addComment } from "../redux/actions";
//импортируем хук работы с состоянием компонента
import { useState } from "react";
//импортируем хук работы с хранилищем
import { useSelector, useDispatch } from "react-redux";
import Comment from "./Comment";
//импортируем пакет создания уникальных ID
import uniqid from "uniqid";


const Comments = () => {
    //состояние поля ввода
    const [inputValue, setInputValue] = useState("");
    //получаем данные и харнилища
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        console.log(commentsReducer.comments)
        return commentsReducer.comments
    })
    const dispatch = useDispatch();
    //обработка события отправки формы
    const onAddComment = (event) => {
        event.preventDefault();
        dispatch(addComment(uniqid(), inputValue));
        setInputValue("")
    }
    //функция изменения состояния поля ввода
    const onInputComment = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className='right'>
            <form className="form" onSubmit={onAddComment}>
                <input
                    className='description'
                    value={inputValue}
                    type='text'
                    placeholder="Please type a new comment"
                    onChange={onInputComment}
                />
                {/*создаем скрытый инпут для отправки формы при нажатии на ENTER*/}
                <input type='submit' hidden />
                <button type="submit" className={inputValue ? "delete_btn_form" : "delete_btn_form hidden"} >✓</button>
            </form>
            <ul className='comments_list' >
                {!!comments && comments.map(item => {
                    return <Comment item={item} key={uniqid()} />
                })}
            </ul>
        </div>
    )
}

export default Comments;