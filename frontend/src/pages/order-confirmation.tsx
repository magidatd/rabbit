const checkout = {
	id: 1,
	createdAt: new Date(),
	checkoutItems: [
		{
			productId: 1,
			name: 'T-Shirt',
			size: 'M',
			colour: 'Red',
			quantity: 1,
			price: 15,
			image: 'https://picsum.photos/200?random=1',
		},
		{
			productId: 2,
			name: 'T-Shirt',
			size: 'XL',
			colour: 'Blue',
			quantity: 2,
			price: 15,
			image: 'https://picsum.photos/200?random=2',
		},
		{
			productId: 3,
			name: 'Shirt',
			size: 'S',
			colour: 'White',
			quantity: 4,
			price: 20,
			image: 'https://picsum.photos/200?random=3',
		},
		{
			productId: 4,
			name: 'Blouse',
			size: 'XX',
			colour: 'Pink',
			quantity: 1,
			price: 23,
			image: 'https://picsum.photos/200?random=4',
		},
		{
			productId: 5,
			name: 'T-Shirt',
			size: 'M',
			colour: 'Green',
			quantity: 1,
			price: 15,
			image: 'https://picsum.photos/200?random=5',
		},
		{
			productId: 6,
			name: 'T-Shirt',
			size: 'M',
			colour: 'Yellow',
			quantity: 1,
			price: 15,
			image: 'https://picsum.photos/200?random=6',
		},
	],
	shippingAddress: {
		address: 'Plot 34 Flesk, Aquamarine Street, Morningside',
		city: 'Masvingo',
		country: 'Zimbabwe',
	},
};

const OrderConfirmation = () => {
	const calculateEstimatedDelivery = (createdAt: Date) => {
		const orderDate = new Date(createdAt);

		orderDate.setDate(orderDate.getDate() + 10);

		return orderDate.toLocaleDateString();
	};

	return (
		<div className='max-w-4xl mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
				Thank You For Your Order
			</h1>
			{checkout && (
				<div className='p-6 rounded-lg border'>
					<div className='flex justify-between mb-20'>
						{/* Order Id and Date */}
						<div>
							<h2 className='text-xl font-semibold'>Order ID: {checkout.id}</h2>
							<p className='text-gray-500'>
								Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
							</p>
						</div>
						{/* Estimated Delivery */}
						<div>
							<p className='text-emerald-700 text-sm'>
								Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
							</p>
						</div>
					</div>
					{/* Order Items */}
					<div className='mb-20'>
						{checkout.checkoutItems.map((item) => (
							<div
								key={item.productId}
								className='flex items-center mb-4'
							>
								<img
									src={item.image}
									alt={item.name}
									className='w-16 h-16 object-cover rounded-md mr-4'
								/>
								<div>
									<h4 className='text-md font-semibold'>{item.name}</h4>
									<p className='text-sm text-gray-500'>
										{item.colour} | {item.size}
									</p>
								</div>
								<div className='ml-auto text-right'>
									<p className='text-md'>${item.price}</p>
									<p className='text-sm text-gray-500'>Qty: {item.quantity}</p>
								</div>
							</div>
						))}
					</div>
					{/* Payment and Delivery Info */}
					<div className='grid grid-cols-2 gap-8'>
						{/* Payment Info */}
						<div>
							<h4 className='text-lg font-semibold mb-2'>Payment</h4>
							<p className='text-gray-600'>PayPal</p>
						</div>
						{/* Delivery Info */}
						<div>
							<h4 className='text-lg font-semibold mb-2'>Delivery</h4>
							<p className='text-gray-600'>{checkout.shippingAddress.address}</p>
							<p className='text-gray-600'>
								{checkout.shippingAddress.city}, {checkout.shippingAddress.country}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderConfirmation;
