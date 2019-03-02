const express = require('express')
const router = express.Router()

// load models
const qualification = require('../../models/qualification')

// @router Get api/qualification/all
// @desc   Get all qualification
// @access Public
router.get('/all', async (req, res) => {
    const result = await qualification.getAll()
    return res.json(result)
})

module.exports = router
