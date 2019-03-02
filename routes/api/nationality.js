const express = require('express')
const router = express.Router()

// load models
const nationality = require('../../models/nationality')

// @router Get api/nationality/all
// @desc   Get all nationality
// @access Public
router.get('/all', async (req, res) => {
    const result = await nationality.getAll()
    return res.json(result)
})

module.exports = router
