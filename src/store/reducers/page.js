const { FETCH_PAGE } = require("store/types");

const initialState = {}

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_PAGE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}