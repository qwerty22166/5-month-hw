import {types} from "./types";




function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function alertOn (alert) {
    return {
        type: types.ALERT_ON,
        payload: alert
    }
}

export function alertOff () {
    return {
        type: types.ALERT_OFF
    }
}

export function userQ () {
    return {
        type: types.USER
    }
}

export function createUserAction (userInfo) {

    return async function (dispatch) {

        dispatch(preloaderOn())
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users',options)

        if(response.status === 201) {
            dispatch(alertOn({message: "пользователь создан", variant: "success"}))
        }

        else if(response.status === 404) {
            dispatch(alertOn({message: "пользователь не создан", variant: "danger"}))
        }

        dispatch(preloaderOff());

        setTimeout(() => {
            dispatch(alertOff())
        }, 3000)

    }
}