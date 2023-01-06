import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {setTimeOutAction} from "../../redux/actions/actions";

function AboutPage(props) {
    const dispatch = useDispatch()
    const {title} = useSelector(state => state.titleReducer)

    const sayHello = () => {
        dispatch(setTimeOutAction())
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={sayHello}>action</button>
        </div>
    );
}

export default AboutPage;