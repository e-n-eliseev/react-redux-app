import { DESCRIPTION } from "./types";

const initialState = {
    text: "Here will be your description!"
}

const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case DESCRIPTION:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}

export default descriptionReducer;