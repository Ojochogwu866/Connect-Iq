/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { BaseProps, DropdownOption } from '../../types/components'

interface DropdownProps extends BaseProps {
	options: DropdownOption[]
	value: string
	onChange: (value: string) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
	options,
	value,
	onChange,
	className = '',
	style,
}) => {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className={`dropdown ${className}`}
			style={style}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}
