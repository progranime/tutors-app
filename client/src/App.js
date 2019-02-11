import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import { Navbar, Spinner } from './components/UI'
// routes
const Home = lazy(() => import('./routes/Home'))
// const Signin = lazy(() => import('./routes/Signin'))
const Signup = lazy(() => import('./routes/Signup'))
const SignupParent = lazy(() => import('./routes/Signup/Parent'))
const SignupStudent = lazy(() => import('./routes/Signup/Student'))
const SignupTutor = lazy(() => import('./routes/Signup/Tutor'))
const SignupTutorForm = lazy(() => import('./routes/Signup/Tutor/Form'))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <Suspense fallback={<Spinner />}>
                            <Navbar />

                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={props => <Home {...props} />}
                                />

                                {/* <Route
                                    exact
                                    path="/signin"
                                    component={props => <Signin {...props} />}
                                />*/}

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
                                    path="/signup/tutor/form"
                                    component={props => (
                                        <SignupTutorForm {...props} />
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
