const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfSignUp: { type: Date, required: true, default: Date.now },
})

module.exports = mongoose.model('user', UserSchema);