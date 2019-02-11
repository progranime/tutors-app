import React, { Component } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'

import { SignupHeader, SignupBody } from '../../../components/Core/Signup'

export class Index extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cellphone: '',
        birthDate: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="signup signup--centered">
                <div className="signup__wrapper">
                    <SignupHeader backLink="/signup" title="Student Sign Up" />
                    <SignupBody>
                        <form onSubmit={this.handleSubmit}>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="firstName"
                                        label="First Name"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Create a password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="cellphone"
                                        label="Cellphone Number"
                                        name="cellphone"
                                        value={this.state.cellphone}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="birthDate"
                                        label="Date of Birth"
                                        name="birthDate"
                                        type="date"
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        className="p-2"
                                        fullWidth
                                    >
                                        Sign up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </SignupBody>
                </div>
            </div>
        )
    }
}

export default Index
