const prisma = require('../prisma/prisma-client');

{
	/* Get all products */
}
const getAllProducts = async () => {
	return await prisma.product.findMany();
};

{
	/* Create a new product */
}
const createProduct = async (data) => {
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
		creatorId,
	} = data;

	return await prisma.product.create({
		data: {
			name: name,
			description: description,
			price: price,
			discountPrice: discountPrice,
			countInStock: countInStock,
			category: category,
			brand: brand,
			sizes: sizes,
			colours: colours,
			collections: collections,
			material: material,
			gender: gender,
			images: images,
			imageAlt: imageAlt,
			isFeatured: isFeatured,
			isPublished: isPublished,
			tags: tags,
			dimensionsLength: dimensionsLength,
			dimensionsWidth: dimensionsWidth,
			dimensionsHeight: dimensionsHeight,
			weight: weight,
			sku: sku,
			creatorId: creatorId,
		},
	});
};

{
	/* Get product by name */
}
const getProductByName = async (name) => {
	return await prisma.product.findFirst({ where: { name: name } });
};

{
	/* Get product by SKU */
}
const getProductBySKU = async (sku) => {
	return await prisma.product.findUnique({ where: { sku: sku } });
};

{
	/* Get product by ID */
}
const getProductByID = async (id) => {
	return await prisma.product.findUnique({ where: { id: id } });
};

{
	/* Update a product */
}
const updateProduct = async (id, data) => {
	return await prisma.product.update({ where: { id: id }, data });
};

{
	/* Delete product */
}
const deleteProduct = async (id) => {
	return await prisma.product.delete({ where: { id: id } });
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
