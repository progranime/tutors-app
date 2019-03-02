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

export class Index extends Component {
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h4>
                        Thanks for signing up! Please complete your registration
                    </h4>
                    <p>
                        Once you submit these details, we will review them and
                        progress your application to the next stage
                    </p>
                </div>

                <div>
                    <h6>Personal Details</h6>

                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                value=""
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value=""
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Index
