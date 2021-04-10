const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const dbURI = config.get('mongooseURI');

app.use(express.json({ extended: false }))

app.get('/', (req, res, next) => { res.json({ msg: 'Welcome to server' }) })

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(dbURI, {
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port : ${ PORT }`)
        console.log('-------Database connection successfull-------');
    });

}).catch((err) => {
    console.log(err)
    console.log('Connection to Database Failed!');
});


