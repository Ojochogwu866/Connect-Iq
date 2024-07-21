import React from 'react'
import { Link } from 'react-router-dom'

interface FooterProps {
	className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
	return (
		<footer className={`bg-gray-900 py-8 text-gray-200 ${className}`}>
			<div className="container mx-auto flex w-10/12 flex-col justify-between px-4 pt-10">
				<div className="flex flex-wrap justify-between">
					<div className="mb-6 w-full md:mb-0 md:w-1/3">
						<h3 className="mb-2 text-xl font-bold">Connect-Iq IoT Platform</h3>
						<p className="text-sm">
							Empowering IoT with intelligent data collection and analysis.
						</p>
					</div>
					<div className="mb-6 w-full md:mb-0 md:w-1/3">
						<h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
						<ul className="text-sm">
							<li className="mb-1">
								<Link to={'/'} className="hover:text-blue-400">
									About Us
								</Link>
							</li>
							<li className="mb-1">
								<Link to={'/'} className="hover:text-blue-400">
									Features
								</Link>
							</li>
							<li className="mb-1">
								<Link to={'/'} className="hover:text-blue-400">
									Pricing
								</Link>
							</li>
							<li className="mb-1">
								<Link to={'/'} className="hover:text-blue-400">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3">
						<h4 className="mb-2 text-lg font-semibold">Connect</h4>
						<div className="flex space-x-4">
							<a
								href="https://twitter.com/cniq"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-400"
							>
								Twitter
							</a>
							<a
								href="https://linkedin.com/company/cniq"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-400"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/cniq"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-400"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 flex items-start justify-start border-t border-gray-700 pt-8 text-center text-sm">
					<p>&copy; {new Date().getFullYear()} Cn-Iq. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
