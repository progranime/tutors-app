import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import {
    SignupHeader,
    SignupBody,
    SignupFooter
} from '../../components/Core/Signup'

export class Index extends Component {
    render() {
        return (
            <div className="signup signup--centered">
                <div className="signup__wrapper">
                    <SignupHeader backLink="/signin" />
                    <SignupBody>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup/parent"
                            size="large"
                            fullWidth={true}
                            className="p-5 mb-4"
                        >
                            I'm a parent/guardian
                        </Button>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup/student"
                            size="large"
                            fullWidth={true}
                            className="p-5"
                        >
                            I'm a student
                        </Button>
                    </SignupBody>
                    <SignupFooter
                        link="/signup/tutor"
                        title="Apply to become a tutor"
                    />
                </div>
            </div>
        )
    }
}

export default Index
