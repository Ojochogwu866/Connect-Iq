import React from 'react'
import { Link } from 'react-router-dom'
import { BaseProps } from '../types/components'

interface NavbarProps extends BaseProps {
	brand: string
}

export const Topbar: React.FC<NavbarProps> = ({
	brand,
	className = '',
	style,
}) => {
	return (
		<nav
			className={`navbar mx-auto flex w-10/12 items-start justify-start ${className}`}
			style={style}
		>
			<Link to={'/'} className="cursor-pointer text-2xl font-bold text-white">
				{brand}
			</Link>
		</nav>
	)
}
