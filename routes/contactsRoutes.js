const express = require('express');
const contactsController = require('../controller/contacts-controller');
const router = express.Router();
const {check} = require('express-validator');

const auth = require('../middleware/auth');

// @route   POST api/contacts
// @desc    Create a contact
// @access  Private
router.post('/',[auth.getAuthToken,[check('name', 'Please add an user name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('callingCode', 'Calling Code must be of maximum 3 digits').isLength({
        min:1,max:3
    }),
    check('phoneNumber', 'PhoneNumber must be of 10 digits').isLength({
        min:10,max:10
    })
]],contactsController.createContacts);

// @route   GET api/contacts
// @desc    Get all contacts
// @access  Private
router.get('/',auth.getAuthToken,contactsController.getContacts);

// @route   UPDATE api/contacts
// @desc    Update a contact
// @access  Private
router.put('/:contactId',auth.getAuthToken,contactsController.updateContacts);

// @route   DELETE api/contacts
// @desc    Delete a contact
// @access  Private
router.delete('/:contactId',auth.getAuthToken,contactsController.deleteContacts);

module.exports = router;