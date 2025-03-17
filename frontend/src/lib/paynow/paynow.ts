import axios from 'axios';
import * as JS_SHA512 from 'js-sha512';
import {
	GOOGLE_QR_PREFIX,
	INNBUCKS_DEEPLINK_PREFIX,
	RESPONSE_ERROR,
	RESPONSE_OK,
	URL_INITIATE_MOBILE_TRANSACTION,
	URL_INITIATE_TRANSACTION,
} from './constants';
import Payment from './types/payment';

export class StatusResponse {
	reference: string = '';
	amount: string = '';
	paynowReference: string = '';
	pollUrl: string = '';
	status: string = '';
	error: string = '';

	constructor(data: {
		status: string;
		error: string;
		reference: string;
		amount: string;
		paynowReference: string;
		pollUrl: string;
	}) {
		if (data.status.toLowerCase() === RESPONSE_OK) {
			this.error = data.error ?? '';
		} else {
			this.reference = data.reference;
			this.amount = data.amount;
			this.paynowReference = data.paynowReference;
			this.pollUrl = data.pollUrl;
			this.status = data.status;
			this.error = 'Polling transaction failed';
		}
	}
}

export class InitResponse {
	success: boolean;
	hasRedirect: boolean;
	redirectUrl: string = '';
	error: string = '';
	pollUrl: string = '';
	instructions: string = '';
	status: string;
	innbucks_info: Array<{
		authorization: string;
		deep_link_url: string;
		qr_code: string;
		expires_at: string;
	}> = [];
	isInnbucks: boolean;

	constructor(data: {
		status: string;
		error?: string;
		browserurl?: string;
		pollUrl: string;
		instructions?: string;
		authorizationcode?: string;
		authorizationexpires?: string;
	}) {
		this.status = data.status.toLowerCase();
		this.success = this.status === RESPONSE_OK;
		this.hasRedirect = typeof data.browserurl !== 'undefined';
		this.isInnbucks = false;

		if (!this.success) {
			this.error = data.error ?? '';
		} else {
			this.pollUrl = data.pollUrl;

			if (this.hasRedirect) {
				this.redirectUrl = data.browserurl ?? '';
			}

			if (typeof data.instructions !== 'undefined') {
				this.instructions = data.instructions;
			}

			if (typeof data.authorizationcode !== 'undefined') {
				this.isInnbucks = true;
				this.innbucks_info = [];

				this.innbucks_info.push({
					authorization: data.authorizationcode,
					deep_link_url: INNBUCKS_DEEPLINK_PREFIX + data.authorizationcode,
					qr_code: GOOGLE_QR_PREFIX + data.authorizationcode,
					expires_at: data.authorizationexpires ?? '',
				});
			}
		}
	}
}

export class Paynow {
	constructor(
		public integrationId: string,
		public integrationKey: string,
		public resultUrl: string,
		public returnUrl: string,
	) {}

	send(payment: Payment) {
		return this.init(payment);
	}

	sendMobile(payment: Payment, phone: string, method: string) {
		return this.initMobile(payment, phone, method);
	}

	createPayment(reference: string, authEmail: string): Payment {
		return new Payment(reference, authEmail);
	}

	fail(message: string): Error {
		throw new Error(message);
	}

	init(payment: Payment) {
		this.validate(payment);
		const data = this.build(payment);
		return axios({
			method: 'POST',
			url: URL_INITIATE_TRANSACTION,
			data: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((response) => {
				return this.parse(response.data);
			})
			.catch(function (err) {
				console.log('An error occured while initiating transaction', err);
			});
	}

	async initMobile(
		payment: Payment,
		phone: string,
		method: string,
	): Promise<PromiseLike<InitResponse> | Promise<InitResponse>> {
		this.validate(payment);

		if (!this.isValidEmail(payment.authEmail))
			this.fail(
				'Invalid email. Please ensure that you pass a valid email address when initiating a mobile payment',
			);

		const data = this.buildMobile(payment, phone, method);

		try {
			const response = await axios({
				method: 'POST',
				url: URL_INITIATE_MOBILE_TRANSACTION,
				data: data,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			return this.parse(response.data);
		} catch (err) {
			console.log('An error occured while initiating transaction', err);
			return Promise.reject(new Error('Initiating transaction failed'));
		}
	}

	isValidEmail(emailAddress: string) {
		if (!emailAddress || emailAddress.length === 0) return false;

		return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress);
	}

	parse(response: Response): InitResponse {
		if (typeof response === 'undefined') {
			throw new Error('Response is undefined');
		}
		if (response) {
			const parsedResponseURL = this.parseQuery(response as unknown as string);

			if (
				parsedResponseURL.status.toString().toLowerCase() !== RESPONSE_ERROR &&
				!this.verifyHash(parsedResponseURL)
			) {
				throw new Error('Hashes do not match!');
			}

			return new InitResponse({
				status: parsedResponseURL.status,
				error: parsedResponseURL.error,
				browserurl: parsedResponseURL.browserurl,
				pollUrl: parsedResponseURL.pollUrl,
				instructions: parsedResponseURL.instructions,
				authorizationcode: parsedResponseURL.authorizationcode,
				authorizationexpires: parsedResponseURL.authorizationexpires,
			});
		} else {
			throw new Error('An unknown error occurred');
		}
	}

	generateHash(values: { [key: string]: string }, integrationKey: string) {
		const sha512 = JS_SHA512.sha512;
		let string: string = '';

		for (const key of Object.keys(values)) {
			if (key !== 'hash') {
				string += values[key];
			}
		}

		string += integrationKey.toLowerCase();

		return sha512(string).toUpperCase();
	}

	verifyHash(values: { [key: string]: string }) {
		if (typeof values['hash'] === 'undefined') {
			return false;
		} else {
			return values['hash'] === this.generateHash(values, this.integrationKey);
		}
	}

	urlEncode(url: string) {
		return encodeURI(url);
	}

	urlDecode(url: string) {
		return decodeURIComponent(
			(url + '')
				.replace(/%(?![\da-f]{2})/gi, function () {
					return '%25';
				})
				.replace(/\+/g, '%20'),
		);
	}

	parseQuery(queryString: string) {
		const query: { [key: string]: string } = {};
		const pairs = (
			queryString[0] === '?' ? queryString.substr(1) : queryString
		).split('&');
		for (let i = 0; i < pairs.length; i++) {
			const pair = pairs[i].split('=');
			query[this.urlDecode(pair[0])] = this.urlDecode(pair[1] || '');
		}

		// if(!this.verifyHash(query))
		//         throw new Error("Hash mismatch");
		return query;
	}

	build(payment: Payment) {
		const data: { [key: string]: string } = {
			resulturl: this.resultUrl,
			returnurl: this.returnUrl,
			reference: payment.reference,
			amount: payment.total().toString(),
			id: this.integrationId,
			additionalinfo: payment.info(),
			authemail: typeof payment.authEmail === 'undefined' ? '' : payment.authEmail,
			status: 'Message',
		};

		for (const key of Object.keys(data)) {
			if (key === 'hash') continue;

			data[key] = this.urlEncode(data[key]);
		}

		data['hash'] = this.generateHash(data, this.integrationKey);

		return data;
	}

	buildMobile(
		payment: Payment,
		phone: string,
		method: string,
	): Error | { [key: string]: string } {
		const data: { [key: string]: string } = {
			resulturl: this.resultUrl,
			returnurl: this.returnUrl,
			reference: payment.reference,
			amount: payment.total().toString(),
			id: this.integrationId,
			additionalinfo: payment.info(),
			authemail: payment.authEmail,
			phone: phone,
			method: method,
			status: 'Message',
		};

		for (const key of Object.keys(data)) {
			if (key === 'hash') continue;

			data[key] = this.urlEncode(data[key]);
		}

		data['hash'] = this.generateHash(data, this.integrationKey);

		return data;
	}

	public async pollTransaction(
		url: string,
	): Promise<PromiseLike<InitResponse> | Promise<InitResponse>> {
		try {
			const response = await axios({
				method: 'POST',
				url: url,
				data: null,
			});

			return this.parse(response.data);
		} catch (err) {
			console.log('An error occurred while polling transaction', err);
			return Promise.reject(new Error('Polling transaction failed'));
		}
	}

	parseStatusUpdate(response: string): StatusResponse {
		if (response.length > 0) {
			const parsedResponse = this.parseQuery(response);

			if (!this.verifyHash(parsedResponse)) {
				throw new Error('Hashes do not match!');
			}

			return new StatusResponse({
				status: parsedResponse.status,
				error: parsedResponse.error,
				reference: parsedResponse.reference,
				amount: parsedResponse.amount,
				paynowReference: parsedResponse.paynowReference,
				pollUrl: parsedResponse.pollUrl,
			});
		} else {
			throw new Error('An unknown error occurred');
		}
	}

	validate(payment: Payment) {
		if (payment.items.length() <= 0) {
			this.fail('You need to have at least one item in cart');
		}

		if (payment.total() <= 0) {
			this.fail('The total should be greater than zero');
		}
	}
}
