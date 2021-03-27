const express = require('express');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const contactsRoutes = require('./routes/contacts');

const app = express();

app.get('/',(req,res,next) =>{res.json({msg : 'Welcome to server'})})

app.use('/api/auth',authRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/contacts',contactsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {console.log(`Server started on port : ${PORT}`)});