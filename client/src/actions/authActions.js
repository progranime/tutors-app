import axios from 'axios'

import {
    GET_ERROR,
    CREATE_EMAIL_CONFIRMATION,
    CREATE_ACTIVATE_EMAIL
} from './types'
import { saveState } from '../store/localStorage'
import config from '../config'
import { getUserSession } from './userActions'

export const signup = (payload, history) => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: `/api/user/signup`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (!res.data.error) {
            let emailConfirmation = {
                firstName: payload.firstName,
                email: payload.email,
                userTypeId: payload.userTypeId
            }

            console.log(emailConfirmation)

            saveState(config.confirmationEmail, emailConfirmation)

            // send an email confirmation
            dispatch(createEmailConfirmation(emailConfirmation))

            // need to confirm it to your email
            history.push('/signup/confirmation')
        } else {
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
    const axiosOptions = {
        method: 'post',
        url: `/api/user/signin`,
        data: payload
    }

    axios(axiosOptions).then(async res => {
        if (!res.data.length) {
            dispatch({
                type: GET_ERROR,
                payload: {
                    message:
                        'Please input correct credentials / Confirm your email first'
                }
            })
            return
        }

        // get the data of the user
        let sessionData = await dispatch(getUserSession(payload))

        // add user data to localStorage
        saveState(config.sessionName, sessionData)
        // redirect to the home page
        window.location.href = '/'
    })
}

export const signout = payload => dispatch => {
    localStorage.clear()
    // redirect to sign in page
    window.location.href = '/signin'
}

export const createEmailConfirmation = payload => dispatch => {
    const axiosOptions = {
        url: `/api/mail/confirmation`,
        method: 'post',
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: CREATE_EMAIL_CONFIRMATION,
            payload
        })
    })
}

export const activateEmail = (payload, history) => dispatch => {
    const axiosOptions = {
        method: 'put',
        url: `/api/mail/activate`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: CREATE_ACTIVATE_EMAIL,
            payload: {
                message: `Email Activated!`
            }
        })

        // if the type of user is parent or student
        // redirect ot signin
        if (payload.userTypeId === 1 || payload.userTypeId === 2)
            history.push('/signin')

        // if tutor redirect to form again to complete the registration
        history.push(
            `/signup/tutor/post-form?id=${payload.id}&token=${payload.token}`
        )
    })
}
