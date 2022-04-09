import { LOADING_ON, LOADING_OFF, ERROR_ON, ERROR_OFF } from "../types";

const initialState = {
    loading: true,
    error: null
}

const additionalReducer = (state = initialState, { type, text }) => {
    switch (type) {
        case LOADING_ON:
            return {
                ...state,
                loading: true
            };
        case LOADING_OFF:
            return {
                ...state,
                loading: false
            };
        case ERROR_ON:
            return {
                ...state,
                error: text
            }
        case ERROR_OFF:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export default additionalReducer;