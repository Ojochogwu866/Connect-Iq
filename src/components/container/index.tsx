/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { BaseProps } from '../../types/components'

interface ContainerProps extends BaseProps {
	children: React.ReactNode
	fluid?: boolean
}

export const Container: React.FC<ContainerProps> = ({
	children,
	fluid = false,
	className = '',
	style,
}) => {
	return (
		<div
			className={`container ${fluid ? 'container-fluid' : ''} ${className}`}
			style={style}
		>
			{children}
		</div>
	)
}
