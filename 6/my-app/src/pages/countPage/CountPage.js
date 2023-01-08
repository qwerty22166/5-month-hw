import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, multiply, divide} from "../../store/countSlice";

function CountPage() {
    const dispatch = useDispatch()
    const {number} = useSelector(state => state.countReducer)

    const [num1, setNum1] = useState({num1: ''})
    const [num2, setNum2] = useState({num2: ''})

    const incrementFunc = () => {
        dispatch(increment({
            num1:num1,
            num2:num2
        }))
    }

   const decrementFunc = () => {
        dispatch(decrement({
            num1:num1,
            num2:num2
        }))
   }

    const multiplyFunc = () => {
        dispatch(multiply({
            num1:num1,
            num2:num2
        }))
    }

    const divideFunc = () => {
        dispatch(divide({
            num1:num1,
            num2:num2
        }))
    }

    return (
        <div>
            <input
            name="num1"
            type="number"
            placeholder="number"
            onChange={(event) => setNum1(event.target.value)}
            />
            <input
            name="num1"
            type="number"
            placeholder="number"
            onChange={(event) => setNum2(event.target.value)}
            />
            <div>
                <button onClick={incrementFunc}>+</button>
                <button onClick={decrementFunc}>-</button>
                <button onClick={multiplyFunc}>*</button>
                <button onClick={divideFunc}>/</button>
            </div>
            <h1>{number}</h1>
        </div>
    );
}

export default CountPage;