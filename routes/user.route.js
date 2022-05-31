const express = require('express');
const userController = require('../controllers/user.controller')
const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/addUser', userController.addUser);
router.get('/users/:id', userController.getUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/edit/:id', userController.editUser);

module.exports = router;