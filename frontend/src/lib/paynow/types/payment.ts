import Cart, { CartItem } from './cart';

export default class Payment {
	constructor(
		public reference: string,
		public authEmail: string,
		public items: Cart = new Cart(),
	) {}

	add(title: string, amount: number, quantity?: number): Payment {
		this.items.add(new CartItem(title, amount, quantity));

		return this;
	}

	info(): string {
		return this.items.summary();
	}

	total(): number {
		return this.items.getTotal();
	}
}
