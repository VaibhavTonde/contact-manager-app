const express = require('express');
const authController = require('../controller/auth-controller');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/',authController.getLoggedInUser);

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/',authController.getUser);

module.exports = router;