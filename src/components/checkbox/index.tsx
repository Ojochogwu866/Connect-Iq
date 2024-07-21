/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { BaseProps } from '../../types/components'

interface CheckboxProps extends BaseProps {
	checked: boolean
	onChange: (checked: boolean) => void
	label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	onChange,
	label,
	className = '',
	style,
}) => {
	return (
		<label className={`checkbox ${className}`} style={style}>
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<span>{label}</span>
		</label>
	)
}
