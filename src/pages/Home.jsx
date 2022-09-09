import React from 'react'
import { featureData } from '../assets/pake-data'
import { Cta, Feature, Hero, PremiumSection, Section, Separator, Slider } from '../components'
import { SectionBody, SectionTitle } from '../components/Section'

const Home = () => {
	return (
		<>
			{/*========start section Hero========== */}
			<Hero />
			{/*========end section Hero========== */}

			{/*========start section feature========== */}
			<Section>
				<SectionTitle 
					className="layout-container"
					style="md:max-w-lg mb-[90px]"
					title="Promoting your business and services with Propel:"
					subtitle="A responsive, multi-page business template with everything you need propel your business."
				/>
				<SectionBody>
					<div className="flex flex-col md:flex-row items-center justify-between gap-5 ">
						{featureData.slice(0,3).map((item,index) => <Feature {...item} key={index} style="w-full md:w-1/3 self-stretch"/>)}
					</div>
				</SectionBody>
			</Section>
			{/*========end section feature========== */}

			{/*========start section Slider========== */}
			<Slider />
			{/*========end section Slider========== */}

			{/*========start section About us========== */}
			<Section style="bg-gray-fa">
				<SectionTitle 
					style="md:max-w-3xl md:mx-auto text-center mb-[90px]"
					title="Illud decore voluptaria has at. "
					subtitle="Hinc invenire atomorum no vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo."
				/>
				<SectionBody>
					<div className="mt-[43px] text-primary-color uppercase text-xs font-ibm text-center">MORE ABOUT US</div>
				</SectionBody>
			</Section>
			{/*========end section About us========== */}

			{/*========start section Separator========== */}
			<Separator bg="bg-gray-fa" />
			{/*========end section Separator========== */}

			{/*========start section PremiumSection========== */}
			<Section style="bg-gray-fa">
				<SectionBody>
					<PremiumSection />
					<div className="pt-20 text-center">
						<div className="text-base text-black">Wanna know more about the Premium deal?</div>
						<a href="#" className="text-xs text-primary-color uppercase mt-5 duration-150 hover:text-black font-ibm">See the full range of Premium</a>
					</div>
				</SectionBody>
			</Section>
			{/*========end section PremiumSection========== */}

			{/*========start section Separator========== */}
			<Separator bg="bg-gray-fa" />
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

export default Home