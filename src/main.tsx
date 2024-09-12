/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { GettingStarted } from './pages/getting-started.tsx'
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
		element: (
			<Login
				onLogin={handleLogin}
				onGoogleLogin={function (): void {
					throw new Error('Function not implemented.')
				}}
				onGithubLogin={function (): void {
					throw new Error('Function not implemented.')
				}}
			/>
		),
	},
	{
		path: '/register',
		element: (
			<Register
				onRegister={handleRegister}
				onGoogleRegister={function (): void {
					throw new Error('Function not implemented.')
				}}
				onGithubRegister={function (): void {
					throw new Error('Function not implemented.')
				}}
			/>
		),
	},
	{
		path: '/getting-started',
		element: <GettingStarted />,
	},
])
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
