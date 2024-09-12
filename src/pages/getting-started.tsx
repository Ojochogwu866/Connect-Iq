import React from 'react'
import { FaChartLine, FaCloudUploadAlt, FaCode, FaRocket } from 'react-icons/fa'
import { Button } from '../components/button'
import { Footer } from '../components/footer'
import { Hero } from '../components/hero'

interface StepCardProps {
	icon: React.ReactNode
	title: string
	description: string
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
	<div className="overflow-hidden rounded-[2px] border-[0.5px] border-purple-100 bg-white shadow-sm">
		<div className="flex items-center gap-2 bg-purple-50 p-4">
			<div className="text-base text-purple-600">{icon}</div>
			<h3 className="text-base font-semibold text-purple-800">{title}</h3>
		</div>
		<div className="p-6">
			<p className="leading-relaxed text-gray-600">{description}</p>
		</div>
	</div>
)

export const GettingStarted: React.FC = () => {
	const steps: StepCardProps[] = [
		{
			icon: <FaRocket />,
			title: 'Sign Up for ConnectIQ',
			description:
				"Begin your journey by creating a ConnectIQ account. Our streamlined signup process ensures you're up and running in minutes, ready to harness the power of IoT data streaming.",
		},
		{
			icon: <FaCode />,
			title: 'Set Up Your Devices',
			description:
				"Integrate your IoT devices seamlessly with our platform. Whether you're using our SDKs or RESTful APIs, ConnectIQ supports a wide range of protocols and device types for maximum flexibility.",
		},
		{
			icon: <FaCloudUploadAlt />,
			title: 'Start Streaming Data',
			description:
				'With your devices connected, start streaming data to ConnectIQ. Our platform handles millions of data points per second, ensuring real-time data processing and storage for your IoT ecosystem.',
		},
		{
			icon: <FaChartLine />,
			title: 'Visualize and Analyze',
			description:
				'Leverage our powerful analytics tools and customizable dashboards to gain actionable insights from your IoT data. From real-time monitoring to predictive analytics, ConnectIQ empowers data-driven decision making.',
		},
	]

	const handleGetStarted = () => {
		// Add your logic here for what should happen when the button is clicked
		console.log('Get Started button clicked')
	}

	return (
		<div className="flex min-h-screen flex-col bg-gray-100">
			<main className="flex-grow">
				<Hero
					title="Getting Started with ConnectIQ"
					description="Embark on your IoT journey with ConnectIQ - your gateway to effective data streaming and analysis. Our platform simplifies device management, enables real-time data monitoring, and provides powerful analytics tools to drive your IoT strategy forward."
					className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"
				/>

				<div className="container mx-auto w-10/12 py-16">
					<div className="mb-16 rounded-[2px] border-[0.5px] border-purple-100 bg-white p-8 shadow-sm">
						<h2 className="mb-6 text-3xl font-semibold text-purple-900">
							Revolutionize Your IoT Strategy
						</h2>
						<p className="mb-6 text-base leading-relaxed text-gray-700">
							ConnectIQ is more than just an IoT platform - it's a comprehensive
							solution designed to transform the way you collect, process, and
							analyze data from connected devices. Our cutting-edge technology
							empowers businesses of all sizes to harness the full potential of
							the Internet of Things, providing real-time insights and enabling
							smarter, data-driven decisions.
						</p>
						<p className="leading-relaxed text-gray-700">
							Whether you're managing a small network of sensors or
							orchestrating a vast ecosystem of interconnected devices,
							ConnectIQ scales effortlessly to meet your needs. With
							industry-leading security protocols, edge computing capabilities,
							and seamless integration options, we provide the robust
							infrastructure you need to stay ahead in the rapidly evolving IoT
							landscape.
						</p>
					</div>

					<h2 className="mb-10 w-full text-left text-3xl font-semibold text-purple-900">
						Four Simple Steps to Get Started
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{steps.map((step, index) => (
							<StepCard key={index} {...step} />
						))}
					</div>

					<div className="mt-16 text-center">
						<Button variant="secondary" onClick={handleGetStarted}>
							Get Started
						</Button>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
