const express = require('express')

const {Get , GetById ,Post } = require('../controllers/aboutController');

const router = express.Router()

router.get('/',Get)
router.get('/:id',GetById)
router.post('/',Post)

module.exports = router;