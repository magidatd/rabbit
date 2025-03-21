const express = require('express');
const { authenticated, admin } = require('../middleware/middleware');
const productController = require('../controllers/product-controller');
const productRouter = new express.Router();

{
	/* Define routes */
}
productRouter.get('/', authenticated, productController.getAllProducts);
productRouter.post('/', authenticated, admin, productController.createProduct);
productRouter.get(
	'/product/:id',
	authenticated,
	admin,
	productController.getProductByID,
);
productRouter.put(
	'/product/:id',
	authenticated,
	admin,
	productController.updateProduct,
);
productRouter.delete(
	'/product/:id',
	authenticated,
	admin,
	productController.deleteProduct,
);

module.exports = { productRouter };
