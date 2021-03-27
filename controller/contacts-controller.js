const createContacts = (req,res) => {
    res.send('Create a contact');
}

const getContacts = (req,res) => {
    res.send('Get all contacts');
}

const updateContacts = (req,res) => {
    res.send('Update a contacts');
}

const deleteContacts = (req,res) => {
    res.send('Delete a contacts');
}

exports.createContacts = createContacts;
exports.getContacts    = getContacts;
exports.updateContacts = updateContacts;
exports.deleteContacts = deleteContacts;
