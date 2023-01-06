const initialState = {
    value: 0
}

export default function reducer(state= initialState, action) {
    if(action.type === "PLUS") {
        let One =+ action.payload
        let Two =+ action.payload2
        return {...state, result: One + Two}
    }
    else if(action.type === "MINUS") {
        return {...state, result: action.payload - action.payload2}
    }
    else if(action.type === "MULTIPLY") {
        return {...state, result: action.payload * action.payload2}
    }
    else if(action.type === "DIVIDE") {
        return {...state, result: action.payload / action.payload2}
    }
    return state
}