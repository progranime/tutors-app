import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import { Navbar, Spinner } from './components/UI'
import { PrivateRoute } from './components/Utilities'
// routes
const Home = lazy(() => import('./routes/Home'))
const Signin = lazy(() => import('./routes/SignIn/index'))
const Signup = lazy(() => import('./routes/Signup'))
const SignupParent = lazy(() => import('./routes/Signup/Parent'))
const SignupStudent = lazy(() => import('./routes/Signup/Student'))
const SignupTutor = lazy(() => import('./routes/Signup/Tutor'))
const SignupTutorPreForm = lazy(() => import('./routes/Signup/Tutor/PreForm'))
const SignupTutorPostForm = lazy(() => import('./routes/Signup/Tutor/PostForm'))
const SignupConfirmation = lazy(() => import('./routes/Signup/Confirmation'))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <Suspense fallback={<Spinner />}>
                            <Navbar />

                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={props => <Home {...props} />}
                                />

                                <Route
                                    exact
                                    path="/signin"
                                    component={props => <Signin {...props} />}
                                />

                                <Route
                                    exact
                                    path="/signup"
                                    component={props => <Signup {...props} />}
                                />
                                <Route
                                    exact
                                    path="/signup/parent"
                                    component={props => (
                                        <SignupParent {...props} />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/signup/student"
                                    component={props => (
                                        <SignupStudent {...props} />
                                    )}
                                />

                                <Route
                                    exact
                                    path="/signup/tutor"
                                    component={props => (
                                        <SignupTutor {...props} />
                                    )}
                                />

                                <Route
                                    exact
                                    path="/signup/tutor/pre-form"
                                    component={props => (
                                        <SignupTutorPreForm {...props} />
                                    )}
                                />

                                <Route
                                    exact
                                    path="/signup/tutor/post-form"
                                    component={props => (
                                        <SignupTutorPostForm {...props} />
                                    )}
                                />

                                <Route
                                    exact
                                    path="/signup/confirmation"
                                    component={props => (
                                        <SignupConfirmation {...props} />
                                    )}
                                />
                            </Switch>
                        </Suspense>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default App
