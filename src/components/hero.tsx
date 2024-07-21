import React from 'react'
import { BaseProps } from '../types/components'
import { Navbar } from './navbar'
import { Topbar } from './topbar'

interface HeroProps extends BaseProps {
	title: string
	description?: string
	stats?: {
		devices?: number
		dataPoints?: number
	}
	ctaText?: string
	onCtaClick?: () => void
}

export const Hero: React.FC<HeroProps> = ({
	title,
	description,
	stats,
	ctaText,
	onCtaClick,
	className = '',
	style,
}) => {
	const navbarItems = [
		{ label: 'Getting Started', to: '/gettingstarted' },
		{ label: 'Software', to: '/software' },
		{ label: 'Login', to: 'login' },
		{ label: 'Use Cases', to: '/usecases' },
	]

	return (
		<div
			className={`animate-gradient-x relative flex min-h-[500px] w-full flex-col items-start justify-center gap-y-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-center ${className}`}
			style={style}
		>
			<div className="flex w-full items-start justify-start border-b border-white py-5">
				<Topbar brand="Cn-Iq" />
			</div>
			<div className="mx-auto flex w-10/12 pb-20">
				<Navbar items={navbarItems} className="mb-8" />
				<div className="z-10 mx-auto flex max-w-3xl flex-col items-start text-left">
					<h1 className="mb-4 text-xl font-semibold text-gray-200 md:text-3xl">
						{title}
					</h1>
					{description && (
						<p className="mb-8 mt-3 text-sm text-white md:text-base md:leading-8">
							{description}
						</p>
					)}

					{stats && (
						<div className="mb-8 flex justify-center space-x-8">
							{stats.devices !== undefined && (
								<div className="text-left">
									<div className="text-3xl font-bold">
										{stats.devices.toLocaleString()}
									</div>
									<div className="mt-1 text-sm uppercase">
										Connected Devices
									</div>
								</div>
							)}
							{stats.dataPoints !== undefined && (
								<div className="text-left">
									<div className="text-3xl font-bold">
										{stats.dataPoints.toLocaleString()}
									</div>
									<div className="mt-1 text-sm uppercase">
										Data Points Collected
									</div>
								</div>
							)}
						</div>
					)}

					{ctaText && onCtaClick && (
						<button
							className="rounded-lg border-[2px] border-white px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-gray-100 hover:text-purple-800"
							onClick={onCtaClick}
						>
							{ctaText}
						</button>
					)}
				</div>
				<div className="inset-0 flex items-end justify-end overflow-hidden opacity-20">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 300 200"
						className="h-full w-full"
					>
						<rect
							x="135"
							y="90"
							width="30"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeDasharray="4 2"
						/>
						{[20, 40, 60, 80, 100, 120, 140, 160].map((radius, index) => (
							<circle
								key={index}
								cx="150"
								cy="100"
								r={radius}
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
								strokeDasharray="2 2"
								className={`animate-pulse-${index + 1}`}
							/>
						))}
						<circle
							cx="150"
							cy="100"
							r="5"
							fill="currentColor"
							className="animate-ping"
						/>
					</svg>
				</div>
			</div>

			<style jsx>{`
				@keyframes pulse {
					0%,
					100% {
						opacity: 0.1;
					}
					50% {
						opacity: 0.5;
					}
				}
				@keyframes gradient-x {
					0%,
					100% {
						background-size: 200% 200%;
						background-position: left center;
					}
					50% {
						background-size: 200% 200%;
						background-position: right center;
					}
				}
				.animate-gradient-x {
					animation: gradient-x 15s ease infinite;
				}
				${[20, 40, 60, 80, 100, 120, 140, 160]
					.map(
						(_, index) => `
          .animate-pulse-${index + 1} {
            animation: pulse ${2 + index * 0.5}s ease-in-out infinite;
            animation-delay: ${index * 0.2}s;
          }
        `
					)
					.join('\n')}
			`}</style>
		</div>
	)
}
