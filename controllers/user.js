var User = require('../models/user');


exports.get_allusers = function(req, res) {
    User.find().exec(function(err, users){
        console.log('users : ', users);
        console.log('err', err);
        if(err){
            res.status(500).send('Unable to fetch users. Please try again.')
        } else{
            res.send(users);
        }
    });
};

exports.create_user = function (req, res) {
    var user = new User(
        {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone
            
        }
    );

    user.save(function (err) {
        if (err) {
            //return next(err);
            res.status(500).send('Unable to create user. Please try after again.')
        } else{
            res.send('User Created successfully')
        }
    })

};

exports.get_user = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
           //return next(err);
           res.status(404).send('User not exists!')
        } else{
            res.send(user);
        }
    })
};

exports.update_user = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            res.status(500).send('Unable to update User')
        }else{
            res.send('User udpated.');
        }
    });
};

exports.delete_user = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err){
            res.status(500).send('Unable to update User')
            //return next(err);
        } else{
            res.send('User Deleted successfully!');
        }
    })
};