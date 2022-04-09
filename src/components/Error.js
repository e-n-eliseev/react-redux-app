import { useSelector } from "react-redux";
import { getCommentError } from "../redux/redusersSelectors/additionalSelectors";

const Error = () => {
    //получаем данные из хранилища
    const text = useSelector(getCommentError)
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