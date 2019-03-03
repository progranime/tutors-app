const express = require('express')
const router = express.Router()

// load models
const admission = require('../../models/admission')

// @router Get api/admission/all
// @desc   Get all admission
// @access Public
router.get('/all', async (req, res) => {
    const result = await admission.getAll()
    return res.json(result)
})

module.exports = router
