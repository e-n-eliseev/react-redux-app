import { DESCRIPTION } from "../types";

const initialState = {
    text: "Here will be your description!"
}

const descriptionReducer = (state = initialState, { type, text }) => {
    switch (type) {
        case DESCRIPTION:
            return {
                ...state,
                text: text
            };
        default:
            return state;
    }
}

export default descriptionReducer;