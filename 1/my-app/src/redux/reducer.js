const count = {
    title: 0
}

export default function reducer (state = count, action) {

    if(action.type === "INCREMENT") {
        return {title: state.title + 1}
    } if (action.type === "DECREMENT") {
        return {title: state.title -1}
    }

    return state
}