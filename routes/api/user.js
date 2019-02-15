const express = require('express')
const router = express.Router()

// load models
const user = require('../../models/user')

router.post('/signup', async (req, res) => {
    const result = await user.store(req.body)
    return res.json(result)
})

router.post('/signin', async (req, res) => {
    const result = await user.verifyUser(req.body)
    return res.json(result)
})

module.exports = router
