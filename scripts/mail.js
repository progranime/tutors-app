const nodemailer = require('nodemailer')

const { account } = require('../config/keys')
const user = require('../models/user')

const self = {
    init: (html, receiver) => {
        return new Promise(resolve => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.password // generated ethereal password
                }
            })

            // setup email data with unicode symbols
            let mailOptions = {
                from: `TutorMe <${account.user}>`, // sender address
                to: `${receiver}`, // list of receivers
                subject: 'TutorMe Email Confirmation', // Subject line
                html: html // html body
            }

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) return console.log(error)

                console.log('Message sent: %s', info.messageId)
                console.log(
                    'Preview URL: %s',
                    nodemailer.getTestMessageUrl(info)
                )

                resolve({
                    message: 'Email has been sent!'
                })
            })
        })
    },
    confirmation: async data => {
        // get the email token and id
        const userData = await user.get({
            email: data.email
        })

        let html = `
            <h1>This is to confirm your email</h1>
            <p>Please click <a href="http://localhost:3002/signup/confirmation?token=${
                userData[0].token
            }&id=${
            userData[0].id
        }" target="_blank">here</a> to activate your email</a>
        `
        self.init(html, data.email)
    }
}

module.exports = self
