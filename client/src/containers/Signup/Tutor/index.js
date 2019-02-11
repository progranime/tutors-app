import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import { SignupHeader, SignupBody } from '../../../components/Core/Signup'

export class Index extends Component {
    render() {
        return (
            <div className="signup signup--centered">
                <div className="signup__wrapper">
                    <SignupHeader backLink="/signup" title="Tutor Sign Up" />
                    <SignupBody>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup/tutor?type=student"
                            size="large"
                            fullWidth={true}
                            className="p-5 mb-4"
                        >
                            I'm currently studying at university
                        </Button>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup/tutor?type=graduated"
                            size="large"
                            fullWidth={true}
                            className="p-5"
                        >
                            I have already graduated
                        </Button>
                    </SignupBody>
                </div>
            </div>
        )
    }
}

export default Index
