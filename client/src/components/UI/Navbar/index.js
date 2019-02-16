import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Grid
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
                    <Grid justify="space-between" container spacing={24}>
                        <Grid item>
                            <Typography variant="h6" color="inherit">
                                <IconButton color="inherit" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                TutorMe
                            </Typography>
                        </Grid>
                        <Grid item>
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
                                    <Button className="white-text">
                                        Hi,
                                        {
                                            loadState(config.sessionName)
                                                .first_name
                                        }
                                        !
                                    </Button>
                                    <Button
                                        color="inherit"
                                        onClick={props.signout}
                                    >
                                        Sign Out
                                    </Button>
                                </Fragment>
                            )}
                        </Grid>
                    </Grid>
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
