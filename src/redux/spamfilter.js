import { ADD_COMMENT, UPDATE_COMMENT } from "./types";
import { errorON } from "./actions";

const badWords = ["тормоз", "слоупок", "редиска", "козел", "осел"];

export function spamfilter({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_COMMENT || action.type === UPDATE_COMMENT) {
                const fraseHasBadWords = badWords.some(item => action.data.text.includes(item));
                if (fraseHasBadWords) {
                    return dispatch(errorON("Выражайтесь культурно!"));
                }
            }
            return next(action)
        }
    }
}