const router = require('express').Router();

const UsersController = require('../../controllers/users.controller');

router.post('/',UsersController.createUser);
router.put('/add_product/:userId',UsersController.addProduct);
router.get('/',UsersController.getAllUsers);

module.exports = router;
