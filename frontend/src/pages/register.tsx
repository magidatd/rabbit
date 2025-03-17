import { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.webp';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('User registered: ', { name, email, password });
	};

	return (
		<div className='flex'>
			<div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
				<form
					onSubmit={handleSubmit}
					className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'
				>
					<div className='flex justify-center mb-6'>
						<h2 className='text-xl font-medium'>Rabbit</h2>
					</div>
					<h2 className='text-2xl font-bold text-center mb-6'>Hey there! 👋</h2>
					<p className='text-center mb-6'>Enter your details to Register</p>
					<div className='mb-4'>
						<label
							htmlFor='name'
							className='block text-sm font-semibold mb-2'
						>
							Name
						</label>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							id='name'
							placeholder='Enter your full name'
							className='w-full p-2 border rounded'
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-sm font-semibold mb-2'
						>
							Email
						</label>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id='email'
							placeholder='Enter your email address'
							className='w-full p-2 border rounded'
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='password'
							className='block text-sm font-semibold mb-2'
						>
							Password
						</label>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id='password'
							placeholder='Enter your password'
							className='w-full p-2 border rounded'
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition'
					>
						Sign Up
					</button>
					<p className='mt-6 text-center text-sm'>
						Already have an account?
						<Link
							to='/login'
							className='text-blue-500 pl-2'
						>
							Login
						</Link>
					</p>
				</form>
			</div>

			<div className='hidden md:block w-1/2 bg-gray-800'>
				<div className='h-full flex flex-col justify-center items-center'>
					<img
						src={registerImage}
						alt='Register Account'
						className='h-[750px] w-full object-cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default Register;
