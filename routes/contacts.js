const express = require('express');
const contactsController = require('../controller/contacts-controller');
const router = express.Router();

// @route   POST api/contacts
// @desc    Create a contact
// @access  Private
router.post('/',contactsController.createContacts);

// @route   GET api/contacts
// @desc    Get all contacts
// @access  Private
router.get('/',contactsController.getContacts);

// @route   UPDATE api/contacts
// @desc    Update a contact
// @access  Private
router.put('/',contactsController.updateContacts);

// @route   DELETE api/contacts
// @desc    Delete a contact
// @access  Private
router.delete('/',contactsController.deleteContacts);

module.exports = router;