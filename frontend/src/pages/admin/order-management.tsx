const orders = [
	{
		id: 11,
		user: { name: 'John Doe' },
		totalPrice: 111,
		status: 'Processing',
	},
];

const OrderManagement = () => {
	return (
		<div className='max-w-7xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-6'>Order Management</h2>
			<div className='overflow-auto shadow-md sm:rounded-lg'>
				<table className='min-w-full text-left text-gray-500'>
					<thead className='bg-gray-100 text-xs uppercase text-gray-700'>
						<tr>
							<th className='py-3 px-4'>Order Id</th>
							<th className='py-3 px-4'>Customer</th>
							<th className='py-3 px-4'>Total Price</th>
							<th className='py-3 px-4'>Status</th>
							<th className='py-3 px-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{orders.length > 0 ? (
							orders.map((order) => (
								<tr
									key={order.id}
									className='border-b hover:bg-gray-50 cursor-pointer'
								>
									<td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
										#{order.id}
									</td>
									<td className='p-4'>{order.user.name}</td>
									<td className='p-4'>${order.totalPrice}</td>
									<td className='p-4'>
										<select value={order.status}></select>
									</td>
									<td className='p-4'>
										<button
											onClick={() => {}}
											className='bg-green-500 text-white px-1.5 py-0.5 rounded hover:bg-green-600'
										>
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td
									colSpan={7}
									className='py-4 px-4 text-center text-gray-500'
								>
									No orders found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderManagement;
