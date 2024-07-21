export interface BaseProps {
	className?: string
	style?: React.CSSProperties
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline'

export interface InputProps extends BaseProps {
	type?: 'text' | 'number' | 'email' | 'password'
	value: string
	onChange: (value: string) => void
	placeholder?: string
}

export interface DropdownOption {
	value: string
	label: string
}

export interface AlertProps {
	type: 'success' | 'warning' | 'error' | 'info'
	message: string
	onClose?: () => void
	className?: string
	style?: React.CSSProperties
}

export interface ModalProps extends BaseProps {
	isOpen: boolean
	onClose: () => void
	title: string
}

export interface Feature {
	title: string
	description: string
}

export interface FeaturesProps {
	features: Feature[]
}
