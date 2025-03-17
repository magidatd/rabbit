import { INTEGRATION_ID, INTEGRATION_KEY } from '../../config/config';
import { Paynow } from '../../lib/paynow';

const PaynowButton = () => {
	const resultUrl = '';
	const returnUrl = '';
	let paynow = new Paynow(INTEGRATION_ID, INTEGRATION_KEY, resultUrl, returnUrl);

	return (
		<div className=''>
			<h1>Paynow</h1>
		</div>
	);
};

export default PaynowButton;
