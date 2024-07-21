import React, { useState } from 'react'
import { BaseProps, ButtonVariant } from '../../types/components'

interface ButtonProps extends BaseProps {
	onClick: () => void
	variant?: ButtonVariant
	disabled?: boolean
	loading?: boolean
	children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	variant = 'primary',
	disabled = false,
	loading = false,
	children,
	className = '',
	style,
}) => {
	const [isActive, setIsActive] = useState(false)

	const baseStyles =
		'px-4 py-2 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

	const variantStyles = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
		secondary:
			'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
		tertiary:
			'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
	}

	const disabledStyles = 'opacity-50 cursor-not-allowed'
	const loadingStyles = 'cursor-wait'
	const activeStyles = 'transform scale-95'

	const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${disabled ? disabledStyles : ''}
    ${loading ? loadingStyles : ''}
    ${isActive ? activeStyles : ''}
    ${className}
  `

	const handleClick = () => {
		if (!disabled && !loading) {
			setIsActive(true)
			onClick()
			setTimeout(() => setIsActive(false), 200)
		}
	}

	return (
		<button
			onClick={handleClick}
			disabled={disabled || loading}
			className={buttonStyles}
			style={style}
		>
			{loading ? (
				<div className="flex items-center justify-center">
					<svg
						className="mr-3 h-5 w-5 animate-spin text-white"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
					Loading...
				</div>
			) : (
				children
			)}
		</button>
	)
}
