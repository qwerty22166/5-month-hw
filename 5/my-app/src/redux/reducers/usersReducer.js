import {types} from "../types";

const initialState = {
    user: {}
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.USER:
            return {state, user: action.payload}
        default: return state
    }
}