const express = require('express')

const {Get , GetById ,Post , Put, Delete} = require('../controllers/serviceController');
const {AuthenticateRoute} = require('./AuthMiddleware')

const router = express.Router()

router.get('/',AuthenticateRoute(["Admin"]),Get)
router.get('/:id', GetById)
router.post('/',Post)
router.put('/:id',Put)
router.delete('/:id',Delete)

module.exports = router;