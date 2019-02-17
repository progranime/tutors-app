import React from 'react'
import { Link } from '@material-ui/core'

const Index = ({ firstName, email, resendEmail }) => {
    return (
        <div className="signup signup--confirmation">
            <div className="signup__wrapper">
                <div className="signup__header">
                    <div className="signup__header-wrapper">
                        <p className="title">Welcome. {firstName}!</p>
                    </div>
                </div>
                <div className="signup__body">
                    <p>
                        You'll be receiving a confirmation email in{' '}
                        <a href="#_">{email}</a>. To complete your sign up,
                        click the link in the email we sent.
                    </p>
                    <p>
                        Haven't gotten an email?
                        <br />
                        <Link onClick={resendEmail}>Click to resend</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index
