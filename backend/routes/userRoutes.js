const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const   {registerUser,login} = require('../controller/userController')
router.post('/register',registerUser)
router.post('/login',login)

module.exports = router