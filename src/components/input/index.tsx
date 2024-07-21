/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { InputProps } from '../../types/components'

export const Input: React.FC<InputProps> = ({
	type = 'text',
	value,
	onChange,
	placeholder,
	className = '',
	style,
}) => {
	return (
		<input
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			className={`mt-1 block h-10 w-full rounded-[2px] border-[1px] border-gray-300 bg-transparent px-4 py-3 text-gray-700 shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
			style={style}
		/>
	)
}
