/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { AlertProps } from '../../types/components'

export const Alert: React.FC<AlertProps> = ({
	type,
	message,
	onClose,
	className = '',
	style,
}) => {
	return (
		<div className={`alert alert-${type} ${className}`} style={style}>
			<span>{message}</span>
			{onClose && (
				<button onClick={onClose} className="alert-close">
					&times;
				</button>
			)}
		</div>
	)
}
