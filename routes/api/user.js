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

// @router Get api/user/profile/:id
// @desc   Get specific user information
// @access Public
router.get('/profile/:id', async (req, res) => {
    const result = await user.get({ id: req.params.id })
    return res.json(result[0])
})

// @router Put api/user/profile/:id/update
// @desc   Put specific user information
// @access Public
router.put('/profile/:id/update', async (req, res) => {
    const result = await user.update(req.body)
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
