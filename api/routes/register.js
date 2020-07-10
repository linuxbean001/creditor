const express = require('express');
const router = express.Router();
const conRegister = require('../controller/con-register');

/* *******************************User Registration************************************* */
router.post('/user', conRegister.addUser);


module.exports = router;