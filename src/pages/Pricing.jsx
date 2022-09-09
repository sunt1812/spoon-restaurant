import React from 'react'
import { factsData, pricingInfoData, questionData } from '../assets/pake-data'
import { Cta, Facts, HeroInner, PricingInfo, Question, Section, Separator } from '../components'
import { SectionBody, SectionTitle } from '../components/Section'

const Pricing = () => {
	return (
		<>
			{/*========start section HeroInner========== */}
			<HeroInner 
				heading="Pricing"
				title="A payment plan for every occasion."
				desc="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
			/>
			{/*========end section HeroInner========== */}

			{/*========start section feature========== */}
			<Section>
				<SectionTitle 
					className="layout-container"
					style="md:max-w-lg mb-[90px]"
					title="We offer multiple options."
					subtitle="Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea."
				/>
				<SectionBody>
					<div className="flex flex-col md:flex-row items-center gap-5">
						{pricingInfoData.map((item,index) => (
							<PricingInfo {...item} key={index}  className="w-full md:w-1/3 self-stretch"/>
						))}
					</div>
				</SectionBody>
			</Section>
			{/*========end section feature========== */}

			{/*========start section feature========== */}
			<Facts data={factsData}/>
			{/*========end section feature========== */}

			{/*========start section Question========== */}
			<Section style="bg-gray-fa">
				<SectionTitle 
					className="layout-container"
					style="md:max-w-lg mb-[90px]"
					title="Got a question about our pricing model?"
					subtitle="Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an."
				/>
				<SectionBody>
					<Question data={questionData}/>
				</SectionBody>
			</Section>
			{/*========end section Question========== */}
			
			{/*========start section Separator========== */}
			<Separator />
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

export default Pricing