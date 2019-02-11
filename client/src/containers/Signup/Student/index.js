import React, { Component } from 'react'

import { SignupHeader, SignupBody } from '../../../components/Core/Signup'

export class Index extends Component {
    render() {
        return (
            <div className="signup signup--centered">
                <div className="signup__wrapper">
                    <SignupHeader />
                    <SignupBody>student signup</SignupBody>
                </div>
            </div>
        )
    }
}

export default Index
