/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { ModalProps } from '../../types/components'

export const Modal: React.FC<ModalProps & { children: React.ReactNode }> = ({
	isOpen,
	onClose,
	title,
	children,
	className = '',
	style,
}) => {
	if (!isOpen) return null

	return (
		<div className="modal-overlay">
			<div className={`modal ${className}`} style={style}>
				<div className="modal-header">
					<h2>{title}</h2>
					<button onClick={onClose}>&times;</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	)
}
