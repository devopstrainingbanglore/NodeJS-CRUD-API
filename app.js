
var express = require('express');

// Imports routes for the User API. In we have defined API routes.
var user = require('./routes/user'); 
var app  = express();


// Set up mongo connection
var mongoose = require('mongoose');

var mongoDbUserName = process.env.MONGODB_USERNAME
var mongoDbPassword = process.env.MONGODB_PASSWORD
var mongoDbHostName = process.env.MONGODB_HOST
var dev_db_url = 'mongodb://mongo:27017/usermanagement'
//var dev_db_url = `mongodb://${mongoDbUserName}:${mongoDbPassword}@${mongoDbHostName}:27017/usermanagement`;
console.log('DB URL: '+ dev_db_url)
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/user', user);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
