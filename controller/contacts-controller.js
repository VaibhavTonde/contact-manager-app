const { validationResult } = require('express-validator');
const Contacts = require('../models/Contacts');

const createContacts = async (req,res) => {
    let error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()})
    }
   
    const {name,email,callingCode,phoneNumber,type} = req.body;
    const {id} = req.user;

    try {
        const newContact = new Contacts({
            name,
            email,
            callingCode,
            phoneNumber,
            type,
            userId : id
        });

        await newContact.save();
        res.status(200).json(newContact); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg : "Server Error"})      
    }
}

const getContacts = async (req,res) => {
    const {id} = req.user;
    
    try {
        const contact = await Contacts.find({userId: id});
        res.status(200).json(contact);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg : "Server Error"})      
    }
}

const updateContacts = async (req,res) => {
    
    const {name,email,callingCode,phoneNumber,type} = req.body;
    const {id} = req.user;
    const {contactId} = req.params;

    const contactFields = {};
    if(name) contactFields.name = name;
    if(email) contactFields.email = email;
    if(callingCode) contactFields.callingCode = callingCode;
    if(phoneNumber) contactFields.phoneNumber = phoneNumber;
    if(type) contactFields.type = type;

    try {
        let contact = await Contacts.findById({_id : contactId});
        if(!contact){
            return res.status(400).json({msg:"Contact does not exsist"})
        }

        if(contact.userId != id){
            return res.status(401).json({msg:"Not authorized user"})
        }

        contact = await Contacts.findByIdAndUpdate(contactId,{$set:contactFields},{new:true});
        if(contact){
            res.status(201).json(contact);
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg : "Server Error"}) 
    }
}

const deleteContacts = async (req,res) => {
    const {id} = req.user;
    const {contactId} = req.params;

    try {
        const contact = await Contacts.findById({_id : contactId});
        if(!contact){
            return res.status(400).json({msg:"Contact does not exsist"})
        }

        if(contact.userId != id){
            return res.status(401).json({msg:"Not authorized user"})
        }

        await Contacts.findByIdAndRemove({_id : contactId});
        return res.status(202).json({msg:"Contact deleted sucessfully"});

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg : "Server Error"}) 
    }
}

exports.createContacts = createContacts;
exports.getContacts    = getContacts;
exports.updateContacts = updateContacts;
exports.deleteContacts = deleteContacts;