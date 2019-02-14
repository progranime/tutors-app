const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// load routes

// express middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create routes

// server port
const port = 5002

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
