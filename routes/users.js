const express = require('express');
const userController = require('../controller/users-controller');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/',userController.createUser);

module.exports = router;