import React, { Component } from 'react'

import { Container } from '../../../../components/Layout'
import SignupTutorPostForm from '../../../../containers/Signup/Tutor/PostForm'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupTutorPostForm {...this.props} />
            </Container>
        )
    }
}

export default Index
