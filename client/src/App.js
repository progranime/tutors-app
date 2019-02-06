import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import { Navbar, Spinner } from './components/UI'
// routes
const Home = lazy(() => import('./routes/Home'))

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
                            </Switch>
                        </Suspense>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default App
