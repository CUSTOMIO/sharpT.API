const express = require('express');
const router = express.Router();


//Controller
const userPersonalController = require('../controller/userPersonal')

router.post('/user', userPersonalController.postUser)

module.exports = router;