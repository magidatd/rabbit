import { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import FilterSidebar from '../components/products/filter-sidebar';
import SortOptions from '../components/products/sort-options';
import ProductGrid from '../components/products/product-grid';

const CollectionPage = () => {
	interface Product {
		id: number;
		name: string;
		price: number;
		images: { url: string }[];
		altText: string;
	}

	const [products, setProducts] = useState<Product[]>([]);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleClickOutside = (e: MouseEvent | TouchEvent) => {
		// Close sidebar if clicked outside
		if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
			setIsSidebarOpen(false);
		}
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		// Add event listener for clicks
		document.addEventListener('mousedown', handleClickOutside, true);
		document.addEventListener('touchstart', handleClickOutside, true);
		document.addEventListener('click', handleClickOutside, true);
		// clean event listener
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchend', handleClickOutside);
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	useEffect(() => {
		setTimeout(() => {
			const fetchedProducts = [
				{
					id: 1,
					name: 'Product 1',
					price: 100,
					images: [{ url: 'https://picsum.photos/500/500?random=3' }],
					altText: 'Product 1',
				},
				{
					id: 2,
					name: 'Product 2',
					price: 140,
					images: [{ url: 'https://picsum.photos/500/500?random=4' }],
					altText: 'Product 2',
				},
				{
					id: 3,
					name: 'Product 3',
					price: 110,
					images: [{ url: 'https://picsum.photos/500/500?random=5' }],
					altText: 'Product 3',
				},
				{
					id: 4,
					name: 'Product 4',
					price: 170,
					images: [{ url: 'https://picsum.photos/500/500?random=6' }],
					altText: 'Product 4',
				},
				{
					id: 5,
					name: 'Product 5',
					price: 100,
					images: [{ url: 'https://picsum.photos/500/500?random=7' }],
					altText: 'Product 5',
				},
				{
					id: 6,
					name: 'Product 6',
					price: 140,
					images: [{ url: 'https://picsum.photos/500/500?random=8' }],
					altText: 'Product 6',
				},
				{
					id: 7,
					name: 'Product 7',
					price: 110,
					images: [{ url: 'https://picsum.photos/500/500?random=9' }],
					altText: 'Product 7',
				},
				{
					id: 8,
					name: 'Product 8',
					price: 170,
					images: [{ url: 'https://picsum.photos/500/500?random=10' }],
					altText: 'Product 8',
				},
			];

			setProducts(fetchedProducts);
		}, 1000);
	}, []);

	return (
		<div className='flex flex-col lg:flex-row'>
			{/* Mobile button */}
			<button
				onClick={toggleSidebar}
				className='lg:hidden border p-2 flex items-center justify-center'
			>
				<FaFilter className='mr-2' /> Filters
			</button>

			{/* Filter Sidebar */}
			<div
				ref={sidebarRef}
				className={`${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
			>
				<FilterSidebar />
			</div>
			<div className='flex-grow p-4'>
				<h2 className='text-2xl uppercase mb-4'>All collection</h2>
				{/* Sort Options */}
				<SortOptions />
				{/* Product Grid */}
				<ProductGrid products={products} />
			</div>
		</div>
	);
};

export default CollectionPage;
