import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import { Navbar, Spinner } from './components/UI'
// routes
const Home = lazy(() => import('./routes/Home'))
const SignIn = lazy(() => import('./routes/SignIn'))
const SignUp = lazy(() => import('./routes/SignUp'))

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

                                <Route
                                    exact
                                    path="/signin"
                                    component={props => <SignIn {...props} />}
                                />

                                <Route
                                    exact
                                    path="/signup"
                                    component={props => <SignUp {...props} />}
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
