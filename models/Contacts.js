const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,ref: 'users'},
    name : {type: String,required: true},
    email: { type: String},
    callingCode: {type: String,required:true},
    phoneNumber: { type: String, required: true },
    type: {type : String, default: 'Personal'},
    dateOfSignUp: { type: Date, required: true, default: Date.now },
})

module.exports = mongoose.model('contact', ContactSchema);