const getLoggedInUser = (req,res) => {
    res.send('Get logged in User');
}

const getUser = (req,res) => {
    res.send('Login User');
}

exports.getLoggedInUser = getLoggedInUser;
exports.getUser = getUser;