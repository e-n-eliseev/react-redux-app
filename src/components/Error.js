import { useSelector } from "react-redux";

const Error = () => {
    //получаем данные из хранилища
    const text = useSelector(state => {
        const { additionalReducer } = state;
        return additionalReducer.error
    })
    return (
        <>
            {
                !!text
                    ? <h2 className="error">
                        {text}
                    </h2 >
                    : null
            }
        </>
    )
}

export default Error;