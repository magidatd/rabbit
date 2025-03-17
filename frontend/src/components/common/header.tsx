import Navbar from './navbar';
import Topbar from './topbar';

const Header = () => {
	return (
		<div className='border-b border-gray-200'>
			{/* Topbar */}
			<Topbar />
			{/* Navbar */}
			<Navbar />
			{/* Cart Drawer */}
		</div>
	);
};

export default Header;
