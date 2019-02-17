const express = require('express')
const router = express.Router()

// load scripts
const mail = require('../../scripts/mail')

// @router Post api/mail/confirmation
// @desc   Post an email confirmation
// @access Public
router.post('/confirmation', async (req, res) => {
    const result = await mail.confirmation(req.body)
    return res.json(result)
})

module.exports = router
