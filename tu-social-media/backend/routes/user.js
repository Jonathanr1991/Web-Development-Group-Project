const router = require('express').Router();
let User = require('../models/user.model');  // mongoose model we created 

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const major = req.body.major;

    const newUser = new User({
        email,
        password,
        firstName,
        lastName,
        major,
    });

    newUser.save()
    .then(() => res.json('New User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
