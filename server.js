const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// load routes
const user = require('./routes/api/user')
const university = require('./routes/api/university')
const mail = require('./routes/api/mail')
const gender = require('./routes/api/gender')
const nationality = require('./routes/api/nationality')
const qualification = require('./routes/api/qualification')
const academic = require('./routes/api/academic')
const admission = require('./routes/api/admission')

// express middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create routes
app.use('/api/user', user)
app.use('/api/university', university)
app.use('/api/mail', mail)
app.use('/api/gender', gender)
app.use('/api/nationality', nationality)
app.use('/api/qualification', qualification)
app.use('/api/academic', academic)
app.use('/api/admission', admission)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))
    // access all routes requested
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// server port
const port = process.env.PORT || 5002

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
