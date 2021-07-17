//Defined Routes for user management APIS in this file.
var express = require('express');
var router = express.Router();

/* Import the controllers for user management APIS.
In which we have defined the logic for CRUD.*/
var user_controller = require('../controllers/user');
//Define API End Points(Routes) & It's Controller Method
router.get('/getAll', user_controller.get_allusers);
router.post('/', user_controller.create_user);
router.get('/:id', user_controller.get_user);
router.put('/:id', user_controller.update_user);
router.delete('/:id', user_controller.delete_user);


module.exports = router;