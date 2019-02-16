import React, { Component } from 'react'
import {
    Grid,
    Button,
    TextField,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from '@material-ui/core'
import queryString from 'query-string'

import { SignupHeader, SignupBody } from '../../../../components/Core/Signup'

export class Index extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        university: '',
        password: '',
        userTypeId: 3
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

    componentDidMount() {
        const searchQuery = queryString.parse(this.props.location.search)
        this.setState({
            userTypeId: searchQuery.type === 'graduated' ? 4 : 3
        })
    }

    render() {
        return (
            <div className="signup signup--centered">
                <div className="signup__wrapper">
                    <SignupHeader
                        backLink="/signup/tutor"
                        title="Tutor Sign Up"
                    />
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
                                    <FormControl>
                                        <InputLabel>University</InputLabel>
                                        <Select
                                            value={this.state.university}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'university'
                                            }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>
                                                Twenty
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
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
