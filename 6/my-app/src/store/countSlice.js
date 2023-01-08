import {createSlice} from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "createSlice",
    initialState: {
        number: 0
    },
    reducers: {
        increment: (state, action) => {
            let one =+ action.payload.num1
            let two =+ action.payload.num2
            state.number = one + two
    },
        decrement: (state, action) => {
            state.number = action.payload.num1 - action.payload.num2
        },
        multiply: (state, action) => {
            state.number = action.payload.num1 * action.payload.num2
        },
        divide: (state, action) => {
            state.number = action.payload.num1 / action.payload.num2
        }
}})

export const {increment, decrement, multiply, divide} = countSlice.actions

export default countSlice.reducer