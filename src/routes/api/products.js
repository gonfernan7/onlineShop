const router = require('express').Router();

const ProductsController = require('../../controllers/products.controller');


//Peticiones get,post,put y delete sobre la url
router.get('/',ProductsController.getAllProducts);
router.post('/',ProductsController.createProduct);

//Mediante :productId aseguramos que de alguna forma le va a llegar el productId
router.put('/:productId',ProductsController.updateProduct);
router.delete('/:productId',ProductsController.deleteProduct);

/*Ruta establecida para buscar el departamento, ponemos /department como parte estatica puesto que siempre mirara ahi y ponemos 
:department como parte dinamica como modificador (es la parte que puede variar, el departamento sobre el que hago la busqueda)
*/
router.get('/department/:department', ProductsController.getByDepartment);

module.exports = router;