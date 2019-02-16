import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import _ from 'lodash'

// to access the state of the store
import { loadState } from '../../../store/localStorage'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !_.isEmpty(loadState('userSession')) ? (
                <Component {...props} />
            ) : (
                <Redirect to="/signin" />
            )
        }
    />
)

export default PrivateRoute
