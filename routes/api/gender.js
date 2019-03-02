const express = require('express')
const router = express.Router()

// load models
const gender = require('../../models/gender')

// @router Get api/gender/all
// @desc   Get all gender
// @access Public
router.get('/all', async (req, res) => {
    const result = await gender.getAll()
    return res.json(result)
})

module.exports = router
