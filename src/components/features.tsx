import { Feature, FeaturesProps } from '../types/components'

const FeatureCard: React.FC<Feature> = ({ title, description }) => (
	<div className="m-4 rounded-[4px] border-[0.5px] border-purple-100 bg-white p-6 shadow-sm">
		<h3 className="mb-4 text-xl font-semibold text-purple-800">{title}</h3>
		<p className="text-sm leading-6 text-gray-600">{description}</p>
	</div>
)

export const Features: React.FC<FeaturesProps> = ({ features }) => {
	return (
		<div className="mx-auto w-10/12 py-12">
			<div className="w-full">
				<h2 className="mb-8 flex w-full px-5 text-center text-xl font-bold text-purple-900">
					Why Cn-Iq
				</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</div>
		</div>
	)
}
