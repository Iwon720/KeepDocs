const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')
const { check } = require("express-validator")
const authentication = require('../models/auth.model')


router.post('/registration',
    [
        check('login', 'Uncorrect login').notEmpty(),
        check('password', 'Password must be longer than 8 and shorter than 12').isLength({ min: 8, max: 12 })
    ],
    authController.registration);


router.post('/login', authController.login)

router.get('/auth', authentication, authController.auth)


module.exports = router