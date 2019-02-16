import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'

import { loadState } from '../../../store/localStorage'
import config from '../../../config'
import { signout } from '../../../actions/authActions'

const Index = props => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        TutorMe
                    </Typography>

                    {!loadState(config.sessionName) ? (
                        <Fragment>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/signin"
                            >
                                Sign In
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/signup"
                            >
                                Sign Up
                            </Button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>
                                Hi {loadState(config.sessionName).first_name}!
                            </div>
                            <Button color="inherit" onClick={props.signout}>
                                Sign Out
                            </Button>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapDispatchToProps = {
    signout
}

export default connect(
    null,
    mapDispatchToProps
)(Index)
