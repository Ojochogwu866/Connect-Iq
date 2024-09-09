import React from 'react'
import { BaseProps } from '../types/components'
import { Link } from 'react-router-dom'

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
			<Link to={'/'} className="text-2xl cursor-pointer font-bold text-white">{brand}</Link>
		</nav>
	)
}
