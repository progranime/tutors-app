import React, { Component } from 'react'

import { Container } from '../../../components/Layout'
import SignupStudent from '../../../containers/Signup/Student'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupStudent history={this.props.history} />
            </Container>
        )
    }
}

export default Index
