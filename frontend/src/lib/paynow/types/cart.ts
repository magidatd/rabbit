export class CartItem {
	constructor(
		public title: string,
		public amount: number,
		public quantity: number = 1,
	) {}
}

export default class Cart {
	public items: CartItem[] = [];
	constructor(_items?: CartItem[]) {
		if (_items) {
			_items.forEach((thing) => {
				this.items.push(thing);
			});
		}
	}

	length(): number {
		return this.items.length;
	}

	add(item: CartItem) {
		this.items.push(item);

		return this.items.length;
	}

	getTotal(): number {
		let cartTotal: number = 0;

		this.items.forEach((item: CartItem) => {
			cartTotal += item.amount * item.quantity;
		});

		return cartTotal;
	}

	summary(): string {
		let summary = '';

		// function (item, index)
		this.items.forEach(function (item) {
			summary = summary.concat(item.title + ',');
		});

		// summary = summary.substr(0, summary.length - 3);
		summary = summary.slice(0, summary.length - 3);

		return summary;
	}
}
