const express = require('express')
const router = express.Router()

// load models
const user = require('../../models/user')

router.post('/', async (req, res) => {
    const result = await user.store(req.body)
    return res.json(result)
})

module.exports = router
