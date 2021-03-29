const express = require('express');
const {check} = require('express-validator');
const userController = require('../controller/users-controller');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', [check('userName', 'Please add an user name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password must be of minimum 6 characters').isLength({
        min: 6
    })
], userController.createUser);

module.exports = router;