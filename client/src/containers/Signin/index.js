import React, { Component } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'

import Signin from '../../components/Core/Signin'

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
        console.log(this.state)
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

export default Index
