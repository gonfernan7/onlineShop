
//Router -> objeto que me permite crear peticiones
const router = require('express').Router();

router.use('/products', require('./api/products'));
router.use('/users',require('./api/users'));


module.exports = router;