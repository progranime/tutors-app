import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, TextField } from '@material-ui/core'
import { connect } from 'react-redux'

import Signin from '../../components/Core/Signin'
import { signin } from '../../actions/authActions'

export class Index extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signin(this.state)
    }

    render() {
        return (
            <div>
                <Signin>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    className="p-2"
                                    fullWidth
                                >
                                    Sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Signin>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    signin
}

Index.propTypes = {
    signin: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
