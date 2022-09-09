import React from 'react'
import { featureData } from '../assets/pake-data'
import { Cta, Feature, PremiumBanner, PremiumSection, Section, Separator } from '../components'
import HeroInner from '../components/HeroInner'
import { SectionBody, SectionTitle } from '../components/Section'

const Features = () => {
	return (
		<>
			{/*========start section HeroInner========== */}
			<HeroInner 
				heading="Features"
				title="Expect only the best meals from us."
				desc="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
			/>
			{/*========end section HeroInner========== */}

			{/*========start section feature========== */}
				<Section>
					<SectionTitle 
						className="layout-container"
						style="md:max-w-lg mb-[90px]"
						title="Electram constituto eam id. Eum illud option te, ea vim tractatos. "
						subtitle="Mazim putant ex mea, et nullam suscipit eam, qui accommodare vituperatoribus at."
					/>
					<SectionBody>
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 ">
							{featureData.slice(0,8).map((item,index) => <Feature {...item} key={index} />)}
						</div>
					</SectionBody>
				</Section>
			{/*========end section feature========== */}

			{/*========start section Separator========== */}
			<Separator />
			{/*========end section Separator========== */}

			{/*========start section PremiumSection========== */}
			<Section>
				<SectionBody>
					<PremiumSection />
				</SectionBody>
			</Section>
			{/*========end section PremiumSection========== */}

			{/*========start section Separator========== */}
			<PremiumBanner />
			{/*========end section Separator========== */}

			{/*========start section Cta========== */}
			<Section style="bg-gray-fa">
				<SectionBody>
					<Cta 
						heading="Party On"
						btnText="Get Started"
					>
						<SectionTitle 
							title="Quas suscipit ad mea."
							subtitle="Pri cu dico labores officiis odio principes complectitur ad sea."
						/>
					</Cta>
				</SectionBody>
			</Section>
			{/*========end section Cta========== */}
		</>
	)
}

export default Features