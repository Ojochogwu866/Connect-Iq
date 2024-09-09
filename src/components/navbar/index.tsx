import React from 'react'
import { Link } from 'react-router-dom'
import { BaseProps } from '../../types/components'

interface NavbarProps extends BaseProps {
	items: { label: string; to: string }[]
}

export const Navbar: React.FC<NavbarProps> = ({
	items,
	className = '',
	style,
}) => {
	return (
		<nav
			className={`flex min-w-[300px] flex-col items-start justify-start text-left ${className}`}
			style={style}
		>
			<ul className="flex flex-col gap-y-4">
				{items.map((item, index) => (
					<li key={index} className="h-10 cursor-pointer border-b border-white">
						<Link
							to={item.to}
							className="block h-full w-full cursor-pointer text-white transition-colors duration-200 hover:text-gray-200"
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
