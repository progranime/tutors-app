import React from 'react'
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
import { signout } from '../../../actions/authActions'

const Index = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    TutorMe
                </Typography>
                <Button color="inherit" component={Link} to="/signin">
                    Sign In
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                    Sign Up
                </Button>
                <Button color="inherit" onClick={props.signout}>
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    )
}

const mapDispatchToProps = {
    signout
}

export default connect(
    null,
    mapDispatchToProps
)(Index)
