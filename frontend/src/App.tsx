import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import UserLayout from './components/layout/user-layout';
import Home from './pages/home';
import { Toaster } from 'sonner';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import CollectionPage from './pages/collection-page';
import ProductDetails from './components/products/product-details';
import { useLayoutEffect } from 'react';

import { ReactNode } from 'react';
import Checkout from './components/cart/checkout';

const Wrapper = ({ children }: { children: ReactNode }) => {
	const location = useLocation();

	useLayoutEffect(() => {
		// Scroll to top of the page when route changes
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return <>{children}</>;
};

const App = () => {
	return (
		<BrowserRouter>
			<Toaster position='top-right' />
			<Wrapper>
				<Routes>
					<Route
						path='/'
						element={<UserLayout />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='login'
							element={<Login />}
						/>
						<Route
							path='register'
							element={<Register />}
						/>
						<Route
							path='profile'
							element={<Profile />}
						/>
						<Route
							path='collections/:collection'
							element={<CollectionPage />}
						/>
						<Route
							path='product/:id'
							element={<ProductDetails />}
						/>
						<Route
							path='checkout'
							element={<Checkout />}
						/>
					</Route>
					<Route>{/* Admin Layout */}</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
