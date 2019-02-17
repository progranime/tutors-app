const express = require('express')
const router = express.Router()

// load scripts
const mail = require('../../scripts/mail')

// load models
const user = require('../../models/user')

// @router Post api/mail/confirmation
// @desc   Post an email confirmation
// @access Public
router.post('/confirmation', async (req, res) => {
    const result = await mail.confirmation(req.body)
    return res.json(result)
})

// @router Post api/mail/activate
// @desc   Post an email to activate
// @access Public
router.put('/activate', async (req, res) => {
    const result = await user.activateEmail(req.body)
    return res.json(result)
})

module.exports = router
