import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countryList } from '../../utils/countries';
import PaypalButton from './paypal-button';
import PaynowButton from './paynow-button';

const cart = {
	products: [
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
	totalPrice: 103,
};

const Checkout = () => {
	const navigate = useNavigate();
	const [checkoutID, setCheckoutID] = useState<number | null>(null);

	const [shippingAddress, setShippingAddress] = useState<{
		firstName: string;
		lastName: string;
		address: string;
		city: string;
		postalCode: string;
		country: string;
		phone: string;
	}>({
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		postalCode: '',
		country: '',
		phone: '',
	});

	const handleCreateCheckout = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCheckoutID(123);
	};

	const handlePaypalPaymentSuccess = (details) => {
		console.log('Payment successful: ', details);
		navigate('/order-confirmation');
	};

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
			{/* Left Section */}
			<div className='bg-white rounded-lg p-6'>
				<h2 className='text-2xl uppercase mb-6'>checkout</h2>
				<form onSubmit={handleCreateCheckout}>
					<h3 className='text-lg mb-4'>Contact Details</h3>
					<div className='mb-4'>
						<label className='block text-gray-700'>Email</label>
						<input
							type='email'
							value='user@example.com'
							className='w-full p-2 border rounded'
							disabled
						/>
					</div>
					<h3 className='text-lg mb-4'>Delivery</h3>
					<div className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='block text-gray-700'>First Name</label>
							<input
								type='text'
								value={shippingAddress.firstName}
								onChange={(e) =>
									setShippingAddress({
										...shippingAddress,
										firstName: (e.target as HTMLInputElement).value,
									})
								}
								className='w-full p-2 border rounded'
								required
							/>
						</div>
						<div>
							<label className='block text-gray-700'>Last Name</label>
							<input
								type='text'
								value={shippingAddress.lastName}
								onChange={(e) =>
									setShippingAddress({
										...shippingAddress,
										lastName: (e.target as HTMLInputElement).value,
									})
								}
								className='w-full p-2 border rounded'
								required
							/>
						</div>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Address</label>
						<input
							type='text'
							value={shippingAddress.address}
							onChange={(e) =>
								setShippingAddress({
									...shippingAddress,
									address: (e.target as HTMLInputElement).value,
								})
							}
							className='w-full p-2 border rounded'
							required
						/>
					</div>
					<div className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='block text-gray-700'>City</label>
							<input
								type='text'
								value={shippingAddress.city}
								onChange={(e) =>
									setShippingAddress({
										...shippingAddress,
										city: (e.target as HTMLInputElement).value,
									})
								}
								className='w-full p-2 border rounded'
								required
							/>
						</div>
						<div>
							<label className='block text-gray-700'>Postal Code</label>
							<input
								type='text'
								value={shippingAddress.postalCode}
								onChange={(e) =>
									setShippingAddress({
										...shippingAddress,
										postalCode: (e.target as HTMLInputElement).value,
									})
								}
								className='w-full p-2 border rounded'
								required
							/>
						</div>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Select Country</label>
						<select
							value={shippingAddress.country}
							onChange={(e) =>
								setShippingAddress({ ...shippingAddress, country: e.target.value })
							}
							className='w-full p-2 border rounded'
						>
							<option value=''>Select your country</option>
							{countryList.map((country) => (
								<option
									key={country.code}
									value={country.name}
								>
									{country.flagEmoji} {country.name}
								</option>
							))}
						</select>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Phone</label>
						<input
							type='tel'
							value={shippingAddress.phone}
							onChange={(e) =>
								setShippingAddress({
									...shippingAddress,
									phone: (e.target as HTMLInputElement).value,
								})
							}
							className='w-full p-2 border rounded'
							required
						/>
					</div>
					<div className='mt-6'>
						{!checkoutID ? (
							<button
								type='submit'
								className='w-full bg-black text-white py-3 rounded'
							>
								Continue to Payment
							</button>
						) : (
							<div>
								<h3 className='text-lg mb-4'>Pay with Paypal or PayNow</h3>
								{/* Paypal Button Component */}
								<PaypalButton
									amount={100}
									onSuccess={handlePaypalPaymentSuccess}
									onError={(err) => alert('Payment failed. Try again.')}
								/>
								{/* Paynow Button Component */}
								<PaynowButton />
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Checkout;
