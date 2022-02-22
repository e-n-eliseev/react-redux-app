import { errorON } from "../redux/actions"
import { useSelector } from "react-redux"
import additionalReducer from "../redux/additionalReducer";

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