const express = require('express')
const router = express.Router()

// load models
const university = require('../../models/university')

// @router Get api/university/all
// @desc   Get all university
// @access Public
router.get('/all', async (req, res) => {
    const result = await university.getAll()
    return res.json(result)
})

module.exports = router
