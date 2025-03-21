const express = require('express');
const { authenticated } = require('../middleware/middleware');
const productController = require('../controllers/product-controller');
const productRouter = new express.Router();

{
	/* Define routes */
}
productRouter.get('/', authenticated, productController.getAllProducts);
productRouter.post('/', authenticated, productController.createProduct);

module.exports = { productRouter };
