// product.js:
const gender = {
	men: 'men',
	women: 'women',
	unisex: 'unisex',
};

const creatorId = 'cm8k7r6zf0000vgfkhuec9i8w';

const products = [
	{
		creatorId: creatorId,
		name: 'Classic Oxford Button-Down Shirt',
		description:
			'This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.',
		price: 39.99,
		discountPrice: 34.99,
		countInStock: 20,
		sku: 'OX-SH-001',
		category: 'Top Wear',
		brand: 'Urban Threads',
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		colours: ['Red', 'Blue', 'Yellow'],
		collections: 'Business Casual',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=39',
			'https://picsum.photos/500/500?random=40',
		],
		imageAlt: [
			'Classic Oxford Button-Down Shirt Front View',
			'Classic Oxford Button-Down Shirt Back View',
		],
		rating: 4.5,
		numberOfReviews: 12,
	},
	{
		creatorId: creatorId,
		name: 'Slim-Fit Stretch Shirt',
		description:
			'A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.',
		price: 29.99,
		discountPrice: 24.99,
		countInStock: 35,
		sku: 'SLIM-SH-002',
		category: 'Top Wear',
		brand: 'Modern Fit',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'Navy Blue', 'Burgundy'],
		collections: 'Formal Wear',
		material: 'Cotton Blend',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=41',
			'https://picsum.photos/500/500?random=42',
		],
		rating: 4.8,
		numberOfReviews: 15,
	},
	{
		creatorId: creatorId,
		name: 'Casual Denim Shirt',
		description:
			'This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.',
		price: 49.99,
		discountPrice: 44.99,
		countInStock: 15,
		sku: 'CAS-DEN-003',
		category: 'Top Wear',
		brand: 'Street Style',
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		colours: ['Light Blue', 'Dark Wash'],
		collections: 'Casual Wear',
		material: 'Denim',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=43',
			'https://picsum.photos/500/500?random=44',
		],
		imageAlt: ['Casual Denim Shirt Front View', 'Casual Denim Shirt Back View'],
		rating: 4.6,
		numberOfReviews: 8,
	},
	{
		creatorId: creatorId,
		name: 'Printed Resort Shirt',
		description:
			'Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.',
		price: 29.99,
		discountPrice: 22.99,
		countInStock: 25,
		sku: 'PRNT-RES-004',
		category: 'Top Wear',
		brand: 'Beach Breeze',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Tropical Print', 'Navy Palms'],
		collections: 'Vacation Wear',
		material: 'Viscose',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=45',
			'https://picsum.photos/500/500?random=46',
		],
		imageAlt: [
			'Printed Resort Shirt Front View',
			'Printed Resort Shirt Back View',
		],
		rating: 4.4,
		numberOfReviews: 10,
	},
	{
		creatorId: creatorId,
		name: 'Slim-Fit Easy-Iron Shirt',
		description:
			'A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.',
		price: 34.99,
		discountPrice: 29.99,
		countInStock: 30,
		sku: 'SLIM-EIR-005',
		category: 'Top Wear',
		brand: 'Urban Chic',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Gray'],
		collections: 'Business Wear',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=47',
			'https://picsum.photos/500/500?random=48',
		],
		imageAlt: [
			'Slim-Fit Easy-Iron Shirt Front View',
			'Slim-Fit Easy-Iron Shirt Back View',
		],
		rating: 5,
		numberOfReviews: 14,
	},
	{
		creatorId: creatorId,
		name: 'Polo T-Shirt with Ribbed Collar',
		description:
			'A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.',
		price: 24.99,
		discountPrice: 19.99,
		countInStock: 50,
		sku: 'POLO-TSH-006',
		category: 'Top Wear',
		brand: 'Polo Classics',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Navy', 'Red'],
		collections: 'Casual Wear',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=49',
			'https://picsum.photos/500/500?random=50',
		],
		imageAlt: ['Polo T-Shirt Back Front View', 'Polo T-Shirt Back Back View'],
		rating: 4.3,
		numberOfReviews: 22,
	},
	{
		creatorId: creatorId,
		name: 'Oversized Graphic T-Shirt',
		description:
			'An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.',
		price: 19.99,
		discountPrice: 15.99,
		countInStock: 40,
		sku: 'OVS-GRF-007',
		category: 'Top Wear',
		brand: 'Street Vibes',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'Gray'],
		collections: 'Streetwear',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=51',
			'https://picsum.photos/500/500?random=52',
		],
		imageAlt: [
			'Oversized Graphic T-Shirt Front View',
			'Oversized Graphic T-Shirt Back View',
		],
		rating: 4.6,
		numberOfReviews: 30,
	},
	{
		creatorId: creatorId,
		name: 'Regular-Fit Henley Shirt',
		description:
			'A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.',
		price: 22.99,
		discountPrice: 18.99,
		countInStock: 35,
		sku: 'REG-HEN-008',
		category: 'Top Wear',
		brand: 'Heritage Wear',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Heather Gray', 'Olive', 'Black'],
		collections: 'Casual Wear',
		material: 'Cotton Blend',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=53',
			'https://picsum.photos/500/500?random=54',
		],
		imageAlt: [
			'Regular-Fit Henley Shirt Front View',
			'Regular-Fit Henley Shirt Back View',
		],
		rating: 4.5,
		numberOfReviews: 25,
	},
	{
		creatorId: creatorId,
		name: 'Long-Sleeve Thermal Tee',
		description:
			'Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.',
		price: 27.99,
		discountPrice: 22.99,
		countInStock: 20,
		sku: 'LST-THR-009',
		category: 'Top Wear',
		brand: 'Winter Basics',
		sizes: ['S', 'M', 'L', 'XL', 'XXL'],
		colours: ['Charcoal', 'Dark Green', 'Navy'],
		collections: 'Winter Essentials',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=55',
			'https://picsum.photos/500/500?random=56',
		],
		imageAlt: [
			'Long-Sleeve Thermal Tee Front View',
			'Long-Sleeve Thermal Tee Back View',
		],
		rating: 4.4,
		numberOfReviews: 18,
	},
	{
		creatorId: creatorId,
		name: 'V-Neck Classic T-Shirt',
		description:
			'A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.',
		price: 14.99,
		discountPrice: 11.99,
		countInStock: 60,
		sku: 'VNECK-CLS-010',
		category: 'Top Wear',
		brand: 'Everyday Comfort',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Black', 'Navy'],
		collections: 'Basics',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=57',
			'https://picsum.photos/500/500?random=58',
		],
		imageAlt: [
			'V-Neck Classic T-Shirt Front View',
			'V-Neck Classic T-Shirt Back View',
		],
		rating: 4.7,
		numberOfReviews: 28,
	},
	{
		creatorId: creatorId,
		name: 'Slim Fit Joggers',
		description:
			'Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.',
		price: 40,
		discountPrice: 35,
		countInStock: 20,
		sku: 'BW-001',
		category: 'Bottom Wear',
		brand: 'ActiveWear',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'Gray', 'Navy'],
		collections: 'Casual Collection',
		material: 'Cotton Blend',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=59',
			'https://picsum.photos/500/500?random=60',
		],
		imageAlt: ['Slim Fit Joggers Front View', 'Slim Fit Joggers Back View'],
		rating: 4.5,
		numberOfReviews: 12,
	},
	{
		creatorId: creatorId,
		name: 'Cargo Joggers',
		description:
			'Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.',
		price: 45,
		discountPrice: 40,
		countInStock: 15,
		sku: 'BW-002',
		category: 'Bottom Wear',
		brand: 'UrbanStyle',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Olive', 'Black'],
		collections: 'Urban Collection',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=61',
			'https://picsum.photos/500/500?random=62',
		],
		imageAlt: ['Cargo Joggers Front View', 'Cargo Joggers Back View'],
		rating: 4.7,
		numberOfReviews: 20,
	},
	{
		creatorId: creatorId,
		name: 'Tapered Sweatpants',
		description:
			'Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.',
		price: 35,
		discountPrice: 30,
		countInStock: 25,
		sku: 'BW-003',
		category: 'Bottom Wear',
		brand: 'ChillZone',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Gray', 'Charcoal', 'Blue'],
		collections: 'Lounge Collection',
		material: 'Fleece',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=63',
			'https://picsum.photos/500/500?random=64',
		],
		imageAlt: ['Tapered Sweatpants Front View', 'Tapered Sweatpants Back View'],
		rating: 4.3,
		numberOfReviews: 18,
	},
	{
		creatorId: creatorId,
		name: 'Denim Jeans',
		description:
			'Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.',
		price: 60,
		discountPrice: 50,
		countInStock: 30,
		sku: 'BW-004',
		category: 'Bottom Wear',
		brand: 'DenimCo',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Dark Blue', 'Light Blue'],
		collections: 'Denim Collection',
		material: 'Denim',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=65',
			'https://picsum.photos/500/500?random=66',
		],
		imageAlt: ['Denim Jeans Front View', 'Denim Jeans Back View'],
		rating: 4.6,
		numberOfReviews: 22,
	},
	{
		creatorId: creatorId,
		name: 'Chino Pants',
		description:
			'Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.',
		price: 55,
		discountPrice: 48,
		countInStock: 40,
		sku: 'BW-005',
		category: 'Bottom Wear',
		brand: 'CasualLook',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Beige', 'Navy', 'Black'],
		collections: 'Smart Casual Collection',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=67',
			'https://picsum.photos/500/500?random=68',
		],
		imageAlt: ['Chino Pants Front View', 'Chino Pants Back View'],
		rating: 4.8,
		numberOfReviews: 15,
	},
	{
		creatorId: creatorId,
		name: 'Track Pants',
		description:
			'Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.',
		price: 40,
		discountPrice: 35,
		countInStock: 20,
		sku: 'BW-006',
		category: 'Bottom Wear',
		brand: 'SportX',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'Red', 'Blue'],
		collections: 'Activewear Collection',
		material: 'Polyester',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=69',
			'https://picsum.photos/500/500?random=70',
		],
		imageAlt: ['Track Pants Front View', 'Track Pants Back View'],
		rating: 4.2,
		numberOfReviews: 17,
	},
	{
		creatorId: creatorId,
		name: 'Slim Fit Trousers',
		description:
			'Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.',
		price: 65,
		discountPrice: 55,
		countInStock: 15,
		sku: 'BW-007',
		category: 'Bottom Wear',
		brand: 'ExecutiveStyle',
		sizes: ['M', 'L', 'XL'],
		colours: ['Gray', 'Black'],
		collections: 'Office Wear',
		material: 'Polyester',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=71',
			'https://picsum.photos/500/500?random=72',
		],
		imageAlt: ['Slim Fit Trousers Front View', 'Slim Fit Trousers Back View'],
		rating: 4.7,
		numberOfReviews: 10,
	},
	{
		creatorId: creatorId,
		name: 'Cargo Pants',
		description:
			'Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.',
		price: 50,
		discountPrice: 45,
		countInStock: 25,
		sku: 'BW-008',
		category: 'Bottom Wear',
		brand: 'StreetWear',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Olive', 'Brown', 'Black'],
		collections: 'Street Style Collection',
		material: 'Cotton',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=73',
			'https://picsum.photos/500/500?random=74',
		],
		imageAlt: ['Cargo Pants Front View', 'Cargo Pants Back View'],
		rating: 4.5,
		numberOfReviews: 13,
	},
	{
		creatorId: creatorId,
		name: 'Relaxed Fit Sweatpants',
		description:
			'Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.',
		price: 35,
		discountPrice: 30,
		countInStock: 35,
		sku: 'BW-009',
		category: 'Bottom Wear',
		brand: 'LoungeWear',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Gray', 'Black', 'Navy'],
		collections: 'Lounge Collection',
		material: 'Fleece',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=75',
			'https://picsum.photos/500/500?random=76',
		],
		imageAlt: [
			'Relaxed Fit Sweatpants Front View',
			'Relaxed Fit Sweatpants Back View',
		],
		rating: 4.3,
		numberOfReviews: 14,
	},
	{
		creatorId: creatorId,
		name: 'Formal Dress Pants',
		description:
			'Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.',
		price: 70,
		discountPrice: 60,
		countInStock: 20,
		sku: 'BW-010',
		category: 'Bottom Wear',
		brand: 'ElegantStyle',
		sizes: ['M', 'L', 'XL'],
		colours: ['Black', 'Navy'],
		collections: 'Formal Collection',
		material: 'Polyester',
		gender: gender.men,
		images: [
			'https://picsum.photos/500/500?random=77',
			'https://picsum.photos/500/500?random=78',
		],
		imageAlt: ['v Front View', 'v Back View'],
		rating: 4.9,
		numberOfReviews: 8,
	},
	{
		creatorId: creatorId,
		name: 'High-Waist Skinny Jeans',
		description:
			'High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.',
		price: 50,
		discountPrice: 45,
		countInStock: 30,
		sku: 'BW-W-001',
		category: 'Bottom Wear',
		brand: 'DenimStyle',
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		colours: ['Dark Blue', 'Black', 'Light Blue'],
		collections: 'Denim Collection',
		material: 'Denim',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=79',
			'https://picsum.photos/500/500?random=80',
		],
		imageAlt: ['High-Waist Skinny Front View', 'High-Waist Skinny Back View'],
		rating: 4.8,
		numberOfReviews: 20,
	},
	{
		creatorId: creatorId,
		name: 'Wide-Leg Trousers',
		description:
			'Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.',
		price: 60,
		discountPrice: 55,
		countInStock: 25,
		sku: 'BW-W-002',
		category: 'Bottom Wear',
		brand: 'ElegantWear',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Beige', 'Black', 'White'],
		collections: 'Formal Collection',
		material: 'Polyester',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=81',
			'https://picsum.photos/500/500?random=82',
		],
		imageAlt: ['Wide-Leg Trousers Front View', 'Wide-Leg Trousers Back View'],
		rating: 4.7,
		numberOfReviews: 15,
	},
	{
		creatorId: creatorId,
		name: 'Stretch Leggings',
		description:
			'Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.',
		price: 25,
		discountPrice: 20,
		countInStock: 40,
		sku: 'BW-W-003',
		category: 'Bottom Wear',
		brand: 'ComfyFit',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'Gray', 'Navy'],
		collections: 'Activewear Collection',
		material: 'Cotton Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=83',
			'https://picsum.photos/500/500?random=84',
		],
		imageAlt: ['Stretch Leggings Front View', 'Stretch Leggings Back View'],
		rating: 4.5,
		numberOfReviews: 30,
	},
	{
		creatorId: creatorId,
		name: 'Pleated Midi Skirt',
		description:
			'Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.',
		price: 55,
		discountPrice: 50,
		countInStock: 20,
		sku: 'BW-W-004',
		category: 'Bottom Wear',
		brand: 'ChicStyle',
		sizes: ['S', 'M', 'L'],
		colours: ['Pink', 'Navy', 'Black'],
		collections: 'Spring Collection',
		material: 'Polyester',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=85',
			'https://picsum.photos/500/500?random=86',
		],
		imageAlt: ['Pleated Midi Skirt Front View', 'Pleated Midi Skirt Back View'],
		rating: 4.6,
		numberOfReviews: 18,
	},
	{
		creatorId: creatorId,
		name: 'Flared Palazzo Pants',
		description:
			'High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.',
		price: 45,
		discountPrice: 40,
		countInStock: 35,
		sku: 'BW-W-005',
		category: 'Bottom Wear',
		brand: 'BreezyVibes',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Beige', 'Light Blue'],
		collections: 'Summer Collection',
		material: 'Linen Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=87',
			'https://picsum.photos/500/500?random=88',
		],
		imageAlt: [
			'Flared Palazzo Pants Front View',
			'Flared Palazzo Pants Back View',
		],
		rating: 4.4,
		numberOfReviews: 22,
	},
	{
		creatorId: creatorId,
		name: 'High-Rise Joggers',
		description:
			'Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.',
		price: 40,
		discountPrice: 35,
		countInStock: 30,
		sku: 'BW-W-006',
		category: 'Bottom Wear',
		brand: 'ActiveWear',
		sizes: ['XS', 'S', 'M', 'L'],
		colours: ['Black', 'Gray', 'Pink'],
		collections: 'Loungewear Collection',
		material: 'Cotton Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=89',
			'https://picsum.photos/500/500?random=90',
		],
		imageAlt: ['High-Rise Joggers Front View', 'High-Rise Joggers Back View'],
		rating: 4.3,
		numberOfReviews: 25,
	},
	{
		creatorId: creatorId,
		name: 'Paperbag Waist Shorts',
		description:
			'Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.',
		price: 35,
		discountPrice: 30,
		countInStock: 20,
		sku: 'BW-W-007',
		category: 'Bottom Wear',
		brand: 'SunnyStyle',
		sizes: ['S', 'M', 'L'],
		colours: ['White', 'Khaki', 'Blue'],
		collections: 'Summer Collection',
		material: 'Cotton',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=91',
			'https://picsum.photos/500/500?random=92',
		],
		imageAlt: [
			'Paperbag Waist Shorts Front View',
			'Paperbag Waist Shorts Back View',
		],
		rating: 4.5,
		numberOfReviews: 19,
	},
	{
		creatorId: creatorId,
		name: 'Stretch Denim Shorts',
		description:
			'Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.',
		price: 40,
		discountPrice: 35,
		countInStock: 25,
		sku: 'BW-W-008',
		category: 'Bottom Wear',
		brand: 'DenimStyle',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Blue', 'Black', 'White'],
		collections: 'Denim Collection',
		material: 'Denim',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=93',
			'https://picsum.photos/500/500?random=94',
		],
		imageAlt: [
			'Stretch Denim Shorts Front View',
			'Stretch Denim Shorts Back View',
		],
		rating: 4.7,
		numberOfReviews: 15,
	},
	{
		creatorId: creatorId,
		name: 'Culottes',
		description:
			'Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.',
		price: 50,
		discountPrice: 45,
		countInStock: 30,
		sku: 'BW-W-009',
		category: 'Bottom Wear',
		brand: 'ChicStyle',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'White', 'Olive'],
		collections: 'Casual Collection',
		material: 'Polyester',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=62',
			'https://picsum.photos/500/500?random=63',
		],
		imageAlt: ['Culottes Front View', 'Culottes Back View'],
		rating: 4.6,
		numberOfReviews: 23,
	},
	{
		creatorId: creatorId,
		name: 'Classic Pleated Trousers',
		description:
			'Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.',
		price: 70,
		discountPrice: 65,
		countInStock: 25,
		sku: 'BW-W-010',
		category: 'Bottom Wear',
		brand: 'ElegantWear',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Navy', 'Black', 'Gray'],
		collections: 'Formal Collection',
		material: 'Wool Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=60',
			'https://picsum.photos/500/500?random=61',
		],
		imageAlt: [
			'Classic Pleated Trousers Front View',
			'Classic Pleated Trousers Back View',
		],
		rating: 4.8,
		numberOfReviews: 20,
	},
	{
		creatorId: creatorId,
		name: 'Knitted Cropped Top',
		description:
			'A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.',
		price: 40,
		discountPrice: 35,
		countInStock: 25,
		sku: 'TW-W-001',
		category: 'Top Wear',
		brand: 'ChicKnit',
		sizes: ['S', 'M', 'L'],
		colours: ['Beige', 'White'],
		collections: 'Knits Collection',
		material: 'Cotton Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=58',
			'https://picsum.photos/500/500?random=59',
		],
		imageAlt: ['Knitted Cropped Top Front View', 'Knitted Cropped Top Back View'],
		rating: 4.6,
		numberOfReviews: 15,
	},
	{
		creatorId: creatorId,
		name: 'Boho Floral Blouse',
		description:
			'Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.',
		price: 50,
		discountPrice: 45,
		countInStock: 30,
		sku: 'TW-W-002',
		category: 'Top Wear',
		brand: 'BohoVibes',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Pink'],
		collections: 'Summer Collection',
		material: 'Viscose',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=56',
			'https://picsum.photos/500/500?random=57',
		],
		imageAlt: ['Boho Floral Blouse Front View', 'Boho Floral Blouse Back View'],
		rating: 4.7,
		numberOfReviews: 20,
	},
	{
		creatorId: creatorId,
		name: 'Casual T-Shirt',
		description:
			'A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.',
		price: 25,
		discountPrice: 20,
		countInStock: 50,
		sku: 'TW-W-003',
		category: 'Top Wear',
		brand: 'ComfyTees',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Black', 'White', 'Gray'],
		collections: 'Essentials',
		material: 'Cotton',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=54',
			'https://picsum.photos/500/500?random=55',
		],
		imageAlt: ['Casual T-Shirt Front View', 'Casual T-Shirt Back View'],
		rating: 4.5,
		numberOfReviews: 25,
	},
	{
		creatorId: creatorId,
		name: 'Off-Shoulder Top',
		description:
			'An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.',
		price: 45,
		discountPrice: 40,
		countInStock: 35,
		sku: 'TW-W-004',
		category: 'Top Wear',
		brand: 'Elegance',
		sizes: ['S', 'M', 'L'],
		colours: ['Red', 'White', 'Blue'],
		collections: 'Evening Collection',
		material: 'Polyester',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=52',
			'https://picsum.photos/500/500?random=53',
		],
		imageAlt: ['Off-Shoulder Top Front View', 'Off-Shoulder Top Back View'],
		rating: 4.7,
		numberOfReviews: 18,
	},
	{
		creatorId: creatorId,
		name: 'Lace-Trimmed Cami Top',
		description:
			'A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.',
		price: 35,
		discountPrice: 30,
		countInStock: 40,
		sku: 'TW-W-005',
		category: 'Top Wear',
		brand: 'DelicateWear',
		sizes: ['S', 'M', 'L'],
		colours: ['Black', 'White'],
		collections: 'Lingerie-Inspired',
		material: 'Silk Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=50',
			'https://picsum.photos/500/500?random=51',
		],
		imageAlt: [
			'Lace-Trimmed Cami Top Front View',
			'Lace-Trimmed Cami Top Back View',
		],
		rating: 4.8,
		numberOfReviews: 22,
	},
	{
		creatorId: creatorId,
		name: 'Graphic Print Tee',
		description:
			'A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.',
		price: 30,
		discountPrice: 25,
		countInStock: 45,
		sku: 'TW-W-006',
		category: 'Top Wear',
		brand: 'StreetStyle',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Black'],
		collections: 'Urban Collection',
		material: 'Cotton',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=48',
			'https://picsum.photos/500/500?random=49',
		],
		imageAlt: ['Graphic Print Tee Front View', 'Graphic Print Tee Back View'],
		rating: 4.6,
		numberOfReviews: 30,
	},
	{
		creatorId: creatorId,
		name: 'Ribbed Long-Sleeve Top',
		description:
			'A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.',
		price: 55,
		discountPrice: 50,
		countInStock: 30,
		sku: 'TW-W-007',
		category: 'Top Wear',
		brand: 'ComfortFit',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Gray', 'Pink', 'Brown'],
		collections: 'Fall Collection',
		material: 'Cotton Blend',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=46',
			'https://picsum.photos/500/500?random=47',
		],
		imageAlt: [
			'Ribbed Long-Sleeve Top Front View',
			'Ribbed Long-Sleeve Top Back View',
		],
		rating: 4.7,
		numberOfReviews: 26,
	},
	{
		creatorId: creatorId,
		name: 'Ruffle-Sleeve Blouse',
		description:
			'A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.',
		price: 45,
		discountPrice: 40,
		countInStock: 20,
		sku: 'TW-W-008',
		category: 'Top Wear',
		brand: 'FeminineWear',
		sizes: ['S', 'M', 'L'],
		colours: ['White', 'Navy', 'Lavender'],
		collections: 'Summer Collection',
		material: 'Viscose',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=44',
			'https://picsum.photos/500/500?random=45',
		],
		imageAlt: [
			'Ruffle-Sleeve Blouse Front View',
			'Ruffle-Sleeve Blouse Back View',
		],
		rating: 4.5,
		numberOfReviews: 19,
	},
	{
		creatorId: creatorId,
		name: 'Classic Button-Up Shirt',
		description:
			"A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
		price: 60,
		discountPrice: 55,
		countInStock: 25,
		sku: 'TW-W-009',
		category: 'Top Wear',
		brand: 'ClassicStyle',
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['White', 'Light Blue', 'Black'],
		collections: 'Office Collection',
		material: 'Cotton',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=42',
			'https://picsum.photos/500/500?random=43',
		],
		imageAlt: [
			'Classic Button-Up Shirt Front View',
			'Classic Button-Up Shirt Back View',
		],
		rating: 4.8,
		numberOfReviews: 25,
	},
	{
		creatorId: creatorId,
		name: 'V-Neck Wrap Top',
		description:
			'A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.',
		price: 50,
		discountPrice: 45,
		countInStock: 30,
		sku: 'TW-W-010',
		category: 'Top Wear',
		brand: 'ChicWrap',
		sizes: ['S', 'M', 'L'],
		colours: ['Red', 'Black', 'White'],
		collections: 'Evening Collection',
		material: 'Polyester',
		gender: gender.women,
		images: [
			'https://picsum.photos/500/500?random=40',
			'https://picsum.photos/500/500?random=41',
		],
		imageAlt: ['V-Neck Wrap Top Front View', 'V-Neck Wrap Top Back View'],

		rating: 4.7,
		numberOfReviews: 22,
	},
];

module.exports = products;
