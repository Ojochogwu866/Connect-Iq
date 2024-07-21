import React from 'react'
import { useInView } from 'react-intersection-observer'

const FeatureRow: React.FC<{
	title: string
	description: string
	imageUrl: string
	imageAlt: string
	imageLeft: boolean
}> = ({ title, description, imageUrl, imageAlt, imageLeft }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	})

	const imageContent = (
		<div className="flex w-full items-center justify-center bg-purple-800 bg-opacity-55 p-16 md:w-1/2">
			<img
				src={imageUrl}
				alt={imageAlt}
				className="h-auto max-w-full shadow-lg"
			/>
		</div>
	)

	const textContent = (
		<div className="flex w-full flex-col justify-center p-8 md:w-1/2">
			<h3 className="mb-4 text-2xl font-bold text-purple-900">{title}</h3>
			<p className="text-base text-gray-600">{description}</p>
		</div>
	)

	return (
		<div
			ref={ref}
			className={`mb-16 flex flex-col md:flex-row ${
				inView ? 'animate-fade-in-up opacity-100' : 'opacity-0'
			}`}
		>
			{imageLeft ? (
				<>
					{imageContent}
					{textContent}
				</>
			) : (
				<>
					{textContent}
					{imageContent}
				</>
			)}
		</div>
	)
}

export const Architecture: React.FC = () => {
	return (
		<section className="bg-gray-100 py-16">
			<div className="container mx-auto w-10/12 px-4">
				<h2 className="mb-8 flex w-full text-center text-xl font-bold text-purple-900">
					Features
				</h2>

				<FeatureRow
					title="Advanced Analytics"
					description="Get deeper insights with our advanced analytics tools. Visualize your data in meaningful ways to make informed decisions."
					imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					imageAlt="Advanced Analytics Graph"
					imageLeft={true}
				/>

				<FeatureRow
					title="Real-time Reporting"
					description="Stay up-to-date with real-time reporting. Our dynamic charts provide instant visibility into your key metrics."
					imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
					imageAlt="Real-time Reporting Chart"
					imageLeft={false}
				/>

				<FeatureRow
					title="Predictive Analysis"
					description="Leverage the power of AI for predictive analysis. Anticipate trends and stay ahead of the curve with our cutting-edge algorithms."
					imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					imageAlt="Predictive Analysis Dashboard"
					imageLeft={true}
				/>
			</div>
		</section>
	)
}
