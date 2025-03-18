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
import OrderConfirmation from './pages/order-confirmation';
import OrderDetails from './pages/order-details';
import MyOrders from './components/orders/my-orders';
import AdminLayout from './components/admin/layout/admin-layout';
import AdminHome from './pages/admin/admin-home';
import UserManagement from './pages/admin/user-management';
import ProductManagement from './pages/admin/product-management';
import EditProduct from './pages/admin/edit-product';
import OrderManagement from './pages/admin/order-management';

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
						<Route
							path='order-confirmation'
							element={<OrderConfirmation />}
						/>
						<Route
							path='order/:id'
							element={<OrderDetails />}
						/>
						<Route
							path='my-orders'
							element={<MyOrders />}
						/>
					</Route>
					<Route
						path='/admin'
						element={<AdminLayout />}
					>
						{/* Admin Layout */}
						<Route
							index
							element={<AdminHome />}
						/>
						<Route
							path='users'
							element={<UserManagement />}
						/>
						<Route
							path='products'
							element={<ProductManagement />}
						/>
						<Route
							path='products/:id/edit'
							element={<EditProduct />}
						/>
						<Route
							path='orders'
							element={<OrderManagement />}
						/>
					</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
