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

{
	/* Get product by Name */
}
const getProductByName = async (req, res) => {
	try {
		const product = await productService.getProductByName(req.params.name);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ error: 'Product not found.' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch product.' });
	}
};

{
	/* Get product by SKU */
}
const getProductBySKU = async (req, res) => {
	try {
		const product = await productService.getProductBySKU(req.params.sku);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ error: 'Product not found.' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch product.' });
	}
};

{
	/* Get product by Id */
}
const getProductByID = async (req, res) => {
	try {
		const product = await productService.getProductByID(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ error: 'Product not found.' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch product.' });
	}
};

{
	/* Update product */
}
const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await productService.updateProduct(
			req.params.id,
			req.body,
		);

		res.json(updatedProduct);
	} catch (error) {
		res.status(400).json({ error: 'Failed to update product.' });
	}
};

{
	/* Delete product */
}
const deleteProduct = async (req, res) => {
	try {
		await productService.deleteProduct(req.params.id);

		res.status(204).send({ message: 'Product successfully deleted.' });
	} catch (error) {
		res.status(400).json({ error: 'Failed to delete product.' });
	}
};

module.exports = {
	getAllProducts,
	createProduct,
	getProductByName,
	getProductBySKU,
	getProductByID,
	updateProduct,
	deleteProduct,
};
