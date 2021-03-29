const express = require('express');
const {check} = require('express-validator');
const authController = require('../controller/auth-controller');
const router = express.Router();

const auth = require('../middleware/auth');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/',auth.getAuthToken,authController.getLoggedInUser);

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/',[
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
],authController.getUser);

module.exports = router;   