const productService = require('../services/product-services');

{
	/* Get all products */
}
const getAllProducts = async (req, res) => {
	try {
		const products = await productService.getAllProducts();

		res.json(products);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch products.' });
	}
};

{
	/* Create product */
}
const createProduct = async (req, res) => {
	try {
		const {
			name,
			description,
			price,
			discountPrice,
			countInStock,
			category,
			brand,
			sizes,
			colours,
			collections,
			material,
			gender,
			images,
			imageAlt,
			isFeatured,
			isPublished,
			tags,
			dimensionsLength,
			dimensionsWidth,
			dimensionsHeight,
			weight,
			sku,
		} = req.body;

		let product = await productService.getProductByName(name);
		if (product) {
			return res
				.status(400)
				.json({ message: 'Product with name already exist in inventory.' });
		}

		product = await productService.getProductBySKU(sku);
		if (product) {
			return res
				.status(400)
				.json({ message: 'Product with SKU already exist in inventory.' });
		}

		const data = {
			name,
			description,
			price,
			discountPrice,
			countInStock,
			category,
			brand,
			sizes,
			colours,
			collections,
			material,
			gender,
			images,
			imageAlt,
			isFeatured,
			isPublished,
			tags,
			dimensionsLength,
			dimensionsWidth,
			dimensionsHeight,
			weight,
			sku,
			creatorId: req.user.id,
		};

		product = await productService.createProduct(data);

		res.status(201).json({
			product,
		});
	} catch (error) {
		res.status(400).json({ error: 'Failed to create product.' });
	}
};

module.exports = { getAllProducts, createProduct };
