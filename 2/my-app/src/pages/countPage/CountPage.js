import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function CountPage(event) {
    const dispatch = useDispatch()
    const result = useSelector(state => state.result)

    const [number1, setNumber1] = useState({num1: 0})
    const [number2, setNumber2] = useState({num2: 0})

    const plusButton = () => {
        dispatch({
            type: "PLUS",
            payload: number1,
            payload2: number2
        })
        if(number1.num1 === '') {
            alert("Поле пустое!")
        } else if(number2.num2 === '') {
            alert("Поле пустое!")
        }
    }

    const minusButton = () => {
        dispatch({
            type: "MINUS",
            payload: number1,
            payload2: number2
        })
        if(number1.num1 === '') {
            alert("Поле пустое!")
        } else if(number2.num2 === '') {
            alert("Поле пустое!")
        }
    }

    const
        multiplyButton = () => {
        dispatch({
            type: "MULTIPLY",
            payload: number1,
            payload2: number2
        })
        if(number1.num1 === '') {
            alert("Поле пустое!")
        } else if(number2.num2 === '') {
            alert("Поле пустое!")
        }
    }

    const divideButton = () => {
        dispatch({
            type: "DIVIDE",
            payload: number1,
            payload2: number2
        })
        if(number1.num1 === '') {
            alert("Поле пустое!")
        } else if(number2.num2 === '') {
            alert("Поле пустое!")
        }
    }

    return (
        <div>
            <div>
                <input
                type="number"
                placeholder="number1"
                name="num1"
                onChange={(event) => setNumber1(event.target.value)
                }
                />
                <input
                type="number"
                placeholder="number2"
                name="num2"
                onChange={(event) => setNumber2(event.target.value)}
                />
            </div>
            <button onClick={plusButton}>+</button>
            <button onClick={minusButton}>-</button>
            <button onClick={multiplyButton}>*</button>
            <button onClick={divideButton}>/</button>
            <h1>{result}</h1>
        </div>
    );
}

export default CountPage;