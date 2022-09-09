import React from 'react'
import { avatar } from '../assets/images'
import { Cta, HeroInner, PremiumIntro, PremiumSection, Section, Separator } from '../components'
import { SectionBody, SectionTitle } from '../components/Section'

const Premium = () => {
	return (
		<>
			{/*========start section HeroInner========== */}
			<HeroInner 
				heading="Premium"
				title="Personalized and total service."
				desc="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
			/>
			{/*========end section HeroInner========== */}

			{/*========start section PremiumIntro========== */}
			<Section>
				<SectionTitle 
					className="layout-container"
					style="md:max-w-lg mb-[90px]"
					title="Here's a different option for you."
					subtitle="Eos in maluisset mediocritatem. Cu qui admodum inimicus, te mei debet qualisque."
				/>
				<PremiumIntro />
				<SectionBody>
					<div className="max-w-2xl mx-auto text-center pt-28">
						<div className="text-sm font-ibm text-gray-999">WHAT THE PEOPLE SAY</div>
						<div className="text-2xl text-primary-color my-5 font-light">“Great customer service, kuddos for doing things the right way rather than the easy way. I am still getting compliments about the food served at my wedding.”</div>
						<div className="flex items-center gap-5 justify-center font-light font-ibm text-sm">
							<img src={avatar} alt="avatar" className="w-10 h-10 rounded-full"/>
							Paul Morgan
						</div>
					</div>
				</SectionBody>
			</Section>

			{/*========end section PremiumIntro========== */}

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

export default Premium