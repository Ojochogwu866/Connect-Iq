import React, { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Navbar } from '../components/navbar'

interface LoginProps {
	onLogin: (username: string, password: string) => void
	onGoogleLogin: () => void
	onGithubLogin: () => void
	className?: string
}

export const Login: React.FC<LoginProps> = ({
	onLogin,
	onGoogleLogin,
	onGithubLogin,
	className = '',
}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		onLogin(username, password)
	}

	const navbarItems = [
		{ label: 'Getting Started', to: '/' },
		{ label: 'Software', to: '/software' },
		{ label: 'Register', to: '/register' },
		{ label: 'Use Cases', to: '/usecases' },
	]

	return (
		<div className={`flex h-screen w-full ${className}`}>
			<div className="w-1/2 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-36">
				<div className="mx-auto w-8/12">
					<Navbar items={navbarItems} className="mb-8" />
				</div>
			</div>
			<div className="flex w-1/2 items-center justify-center bg-white">
				<div className="w-2/3 max-w-md">
					<h2 className="mb-6 text-3xl font-bold text-gray-800">Login</h2>
					<form onSubmit={(e) => e.preventDefault()} className="space-y-6">
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700"
							>
								Username
							</label>
							<Input
								type="text"
								value={username}
								onChange={setUsername}
								placeholder="Enter your username"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<Input
								type="password"
								value={password}
								onChange={setPassword}
								placeholder="Enter your password"
							/>
						</div>
						<Button
							onClick={handleLogin}
							variant="primary"
							disabled={!username || !password}
							className="w-full"
						>
							Log In
						</Button>
					</form>

					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="bg-white px-2 text-gray-500">
									Or continue with
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-3">
							<Button
								onClick={onGoogleLogin}
								variant="secondary"
								className="w-full"
							>
								<FaGoogle className="mr-2" /> Google
							</Button>
							<Button
								onClick={onGithubLogin}
								variant="secondary"
								className="w-full"
							>
								<FaGithub className="mr-2" /> GitHub
							</Button>
						</div>
					</div>

					<p className="mt-8 text-center text-sm text-gray-600">
						Don't have an account?{' '}
						<Link
							to="/register"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Register here
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
