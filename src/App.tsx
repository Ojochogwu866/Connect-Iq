import React from 'react'
import { Element, scroller, Link as ScrollLink } from 'react-scroll'
import { Architecture } from './components/architecture'
import { Features } from './components/features'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { Feature } from './types/components'

const featuresData: Feature[] = [
	{
		title: 'Device Management',
		description:
			'Our IoT platform simplifies device registration and provisioning, supporting bulk registration for efficient scaling. It enables remote configuration and control, allowing firmware updates, reboots, and status checks.',
	},
	{
		title: 'Data Monitoring',
		description:
			'Our platform offers real-time data visualization through intuitive dashboards featuring graphs, charts, and heatmaps. It supports historical data analysis for trend insights, customizable alerts for specific conditions, and notifications via email, SMS, or push notifications.',
	},
	{
		title: 'Security',
		description:
			'The platform ensures end-to-end data encryption during transmission and at rest, using industry-standard protocols like TLS/SSL. Secure device authentication with OAuth and token-based methods ensures safe data transmission.',
	},
	{
		title: 'Scalability',
		description:
			'Designed for robust scalability, the platform supports both horizontal and vertical scaling to handle increasing devices and data. Load balancing distributes data and user requests evenly, ensuring high availability and responsiveness.',
	},
	{
		title: 'Edge Computing',
		description:
			'Our platform leverages edge computing capabilities, allowing data processing and analysis at or near the source of data generation. This reduces latency, conserves network bandwidth, and enables real-time decision making. Edge nodes can perform local analytics, filtering, and aggregation before sending data to the cloud, enhancing efficiency and reducing costs. The platform supports containerized edge applications for easy deployment and management across diverse edge devices.',
	},
	{
		title: 'Integration & APIs',
		description:
			'Our platform offers extensive integration capabilities through well-documented RESTful APIs and webhooks. This allows seamless connection with existing enterprise systems, third-party applications, and custom solutions. Pre-built integrations with popular services like AWS, Azure, Google Cloud, and various analytics and visualization tools are available. The platform also supports data export in multiple formats (JSON, CSV, XML) and provides SDKs for major programming languages to facilitate custom integrations.',
	},
]

const App: React.FC = () => {
	const handleCtaClick = () => {
		scroller.scrollTo('features', {
			duration: 800,
			smooth: 'easeInOutQuart',
		})
	}

	return (
		<div className="">
			<Element name="hero">
				<Hero
					title="ConnectIQ: Effective Data Streaming"
					description="Nexus for data collection platform designed for the Internet of Things (IoT). Our solution seamlessly integrates with a wide range of IoT devices, enabling real-time data synchronization and storage. With ConnectIQ, businesses and developers can effortlessly capture, manage, and analyze data from connected devices, providing valuable insights and enabling smarter decision-making"
					stats={{
						devices: 5000,
						dataPoints: 1000000,
					}}
					ctaText="Getting Started"
					onCtaClick={handleCtaClick}
					className="flex items-start justify-start"
				/>
			</Element>

			<Element name="features">
				<Features features={featuresData} />
			</Element>

			<Element name="architecture">
				<Architecture />
			</Element>

			<Element name="footer">
				<Footer />
			</Element>

			<nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2 transform">
				<ul className="space-y-4">
					<li>
						<ScrollLink
							to="hero"
							smooth={true}
							duration={800}
							className="cursor-pointer text-purple-600 hover:text-purple-800"
						>
							Home
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to="features"
							smooth={true}
							duration={800}
							className="cursor-pointer text-purple-600 hover:text-purple-800"
						>
							Features
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to="architecture"
							smooth={true}
							duration={800}
							className="cursor-pointer text-purple-600 hover:text-purple-800"
						>
							Architecture
						</ScrollLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default App
