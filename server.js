const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// load routes
const user = require('./routes/api/user')

// express middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create routes
app.use('/api/user', user)

// server port
const port = 5002

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
