import axios from 'axios'
import { GET_ERROR } from './types'

export const signup = (payload, history) => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: `/api/user/`,
        data: payload
    }

    axios(axiosOptions).then(res => {
        if (!res.data.error) {
            console.log('successfully login')
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
