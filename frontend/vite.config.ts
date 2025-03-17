import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [react(), tailwindcss()],
	define: {
		'process.env.VITE_PAYPAL_CLIENT_ID': JSON.stringify(
			process.env.VITE_PAYPAL_CLIENT_ID,
		),
		'process.env.VITE_INTEGRATION_ID': JSON.stringify(
			process.env.VITE_INTEGRATION_ID,
		),
		'process.env.VITE_INTEGRATION_KEY': JSON.stringify(
			process.env.VITE_INTEGRATION_KEY,
		),
	},
});
