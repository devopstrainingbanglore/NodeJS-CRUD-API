var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Definging User Schema for Mongo DB Doc
var UserSchema = new Schema({
    firstName: {type: String, required: true, max: 50},
    middleName: {type: String, required: false, max: 50},
    lastName: {type: String, required: true, max: 50},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    },
    {   versionKey: false // Disabling Version Property in mongose 
    });


// Export the model
module.exports = mongoose.model('User', UserSchema);