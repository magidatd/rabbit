/* import { INTEGRATION_ID, INTEGRATION_KEY } from '../../config/config';
import { Paynow } from '../../lib/paynow';

const PaynowButton = () => {
	const resultUrl = '';
	const returnUrl = '';
	const paynow = new Paynow(
		INTEGRATION_ID,
		INTEGRATION_KEY,
		resultUrl,
		returnUrl,
	);

	const handlePayment = async () => {
		const payment = paynow.createPayment('Test 100', 'test@example.com');

		payment.add('Cart', 15);

		paynow
			.send(payment)
			.then((response) => {
				if (response && response.success) {
					// handle successful response
					console.log('Hello success');
				} else {
					// handle error or void response
				}
			})
			.catch((error) => {
				// handle error
			});

		paynow.sendMobile(payment, '0775132492', 'ecocash').then(async (data) => {
			if ((await data).success) {
				// handle success
			} else {
				// handle errors
			}
		});
	};

	return (
		<div className=''>
			<h1>Paynow</h1>
			<button onClick={handlePayment}>Paynow</button>
		</div>
	);
};

export default PaynowButton; */
