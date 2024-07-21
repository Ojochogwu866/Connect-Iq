/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Login } from './pages/login.tsx'
import { Register } from './pages/register.tsx'

const handleLogin = (username: string, password: string) => {
	console.log('Logging in with:', username, password)
}

const handleRegister = (username: string, password: string) => {
	console.log('Logging in with:', username, password)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <Login onLogin={handleLogin} />,
	},
	{
		path: '/register',
		element: <Register onRegister={handleRegister} />,
	},
])
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
