import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function CountPage() {

    const dispatch = useDispatch()
    const title = useSelector(state => state.title)

    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }

    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default CountPage;