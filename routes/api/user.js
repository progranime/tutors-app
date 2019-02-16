const express = require('express')
const router = express.Router()

// load models
const user = require('../../models/user')

// @router Post api/user/signup
// @desc   Sign up user
// @access Public
router.post('/signup', async (req, res) => {
    const result = await user.store(req.body)
    return res.json(result)
})

// @router Post api/user/signin
// @desc   Sign in user
// @access Public
router.post('/signin', async (req, res) => {
    const result = await user.verifyUser(req.body)
    return res.json(result)
})

// @router Post api/user/profile
// @desc   Post user information
// @access Public
router.post('/profile', async (req, res) => {
    const result = await user.get(req.body)
    return res.json(result)
})

module.exports = router
