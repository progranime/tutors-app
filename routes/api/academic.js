const express = require('express')
const router = express.Router()

// load models
const academic = require('../../models/academic')

// @router Get api/academic/all
// @desc   Get all academic
// @access Public
router.get('/all', async (req, res) => {
    const result = await academic.getAll()
    return res.json(result)
})

module.exports = router
