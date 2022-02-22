import React from "react";
//импортируем хуки работы с хранилищем
import { useDispatch, useSelector } from "react-redux";
//импортируем actions события добавления описания
import { addDescription } from "../redux/actions";
//импортируем хук работы с состоянием компонента
import { useState } from "react";

const FotoDescription = () => {
    //состояние поля ввода
    const [inputValue, setInputValue] = useState("");
    //получаем данные из хранилища
    const text = useSelector(state => {
        const { descriptionReducer } = state;
        return descriptionReducer.text
    });
    const dispatch = useDispatch();
    //обработка события отправки формы
    const onAddDescription = (event) => {
        event.preventDefault();
        if (inputValue) {
            dispatch(addDescription(inputValue));
            setInputValue("")
        }
    }
    //функция изменения состояния поля ввода
    const onAddText = (event) => {
        if (event.target.value.trim()) {
            setInputValue(event.target.value);
        }
    }
    return (
        <form className="form" onSubmit={onAddDescription}>
            <input className='description' value={inputValue} type='text' placeholder="Please type a new description" onChange={onAddText} ></input>
            <button type="submit" className={inputValue ? "delete_btn_form" : "delete_btn_form hidden"} >✓</button>
            {/*создаем скрытый инпут для отправки формы при нажатии на ENTER*/}
            <input type='submit' hidden />
            <h1 className='description'>{text}</h1>
        </form>
    )
}

export default FotoDescription;