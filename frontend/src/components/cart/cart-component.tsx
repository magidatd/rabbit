import { BiMinus, BiPlus } from 'react-icons/bi';
import { RiDeleteBin3Line } from 'react-icons/ri';

const cartProducts = [
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
];

const CartComponent = () => {
	return (
		<div>
			{cartProducts.map((product, index) => (
				<div
					key={index}
					className='flex items-start justify-between py-4 border-b'
				>
					<div className='flex items-start'>
						<img
							src={product.image}
							alt={product.name}
							className='w-20 h-24 object-cover mr-4 rounded-md'
						/>
						<div>
							<h3>{product.name}</h3>
							<p className='text-sm text-gray-500'>
								size: {product.size} | colour: {product.colour}
							</p>
							<div className='flex items-center mt-2'>
								<button className='border rounded px-2 py-1 text-xl font-medium'>
									<BiPlus />
								</button>
								<span className='mx-4'>{product.quantity}</span>
								<button className='border rounded px-2 py-1 text-xl font-medium'>
									<BiMinus />
								</button>
							</div>
						</div>
					</div>
					<div>
						<p>$ {product.price}</p>
						<button>
							<RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600' />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default CartComponent;
