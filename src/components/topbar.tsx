import React from 'react'
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
			<div className="text-2xl font-bold text-white">{brand}</div>
		</nav>
	)
}
