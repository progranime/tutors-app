import axios from 'axios'

import { GET_ERROR } from './types'
import { saveState } from '../store/localStorage'
import config from '../config'

export const signup = (payload, history) => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: `/api/user/signup`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (!res.data.error) {
            console.log('successfully signup')
            // redirect to login page
            history.push('/signin')
        } else {
            console.log('error bro')
            // show error message
            dispatch({
                type: GET_ERROR,
                payload: {
                    message: res.data.error
                }
            })
        }
    })
}

export const signin = payload => dispatch => {
    console.log('signin', payload)

    const axiosOptions = {
        method: 'post',
        url: `/api/user/signin`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (!res.data.length) {
            dispatch({
                type: GET_ERROR,
                payload: {
                    message: 'Wrong Credentials'
                }
            })
            return
        }

        // change the value that will be save to the localstorage
        let sessionData = {
            email: payload.email
        }

        // add user data to localStorage
        saveState(config.sessionName, sessionData)
        // redirect to the home page
        window.location.href = '/'
    })
}

export const signout = payload => dispatch => {
    console.log('signout')
    localStorage.clear()
    // redirect to sign in page
    window.location.href = '/signin'
}
