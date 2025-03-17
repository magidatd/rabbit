import Hero from '../components/home/hero';
import FeaturedCollection from '../components/products/featured-collection';
import FeaturesSection from '../components/products/features-section';
import GenderCollectionSection from '../components/products/gender-collection-section';
import NewArrivals from '../components/products/new-arrivals';
import ProductDetails from '../components/products/product-details';
import ProductGrid from '../components/products/product-grid';

const placeholderProducts = [
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

const Home = () => {
	return (
		<div>
			<Hero />
			<GenderCollectionSection />
			<NewArrivals />
			{/* Best Seller */}
			<h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
			<ProductDetails />

			<div className='container mx-auto'>
				<h2 className='text-3xl text-center font-bold mb-4'>Top Wears For Women</h2>
				<ProductGrid products={placeholderProducts} />
			</div>

			<FeaturedCollection />
			<FeaturesSection />
		</div>
	);
};

export default Home;
