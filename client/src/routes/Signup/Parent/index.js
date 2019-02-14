import React, { Component } from 'react'

import { Container } from '../../../components/Layout'
import SignupParent from '../../../containers/Signup/Parent'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupParent history={this.props.history} />
            </Container>
        )
    }
}

export default Index
