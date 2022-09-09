import React from 'react'
import { ourGoalsData, teamData } from '../assets/pake-data'
import { Cta, HeroBanner, HeroInner, OurGoals, Section, Separator, Team } from '../components'
import { SectionBody, SectionTitle } from '../components/Section'

const About = () => {
	return (
		<>
			{/*========start section HeroInner========== */}
			<HeroInner 
				heading="About"
				title="Changing the catering game."
				desc="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
			/>
			{/*========end section HeroInner========== */}

			{/*========start section HeroBanner========== */}
			<HeroBanner/>
			{/*========end section HeroBanner========== */}

			{/*========start section about-intro========== */}
			<Section>
				<SectionTitle 
						className="layout-container"
						style="md:max-w-3xl md:mx-auto text-center"
						title="We combine the benefits of the best local farms with advances made possible by technology to deliver you the best catering experience possible. "
						subtitle="Food surrounds us, but we don’t always think about where it comes from or how it got to us. The way we eat and our experiences with food have huge impact on everything from the environment to our health."
					/>
			</Section>
			{/*========end section about-intro========== */}

			{/*========start section Separator========== */}
			<Separator />
			{/*========end section Separator========== */}

			{/*========start section OurGoals========== */}
			<Section>
				<SectionTitle 
					className="layout-container"
					style="md:max-w-lg mb-[90px]"
					title="Ad malorum nominati vituperata vix."
					subtitle="Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an."
				/>
				<SectionBody>
					<div className="flex flex-col md:flex-row items-center gap-5">
						{ourGoalsData.map((item,index) => (
							<OurGoals {...item} key={index} className="w-full md:w-1/3"/>
						))}
					</div>
				</SectionBody>
			</Section>
			{/*========end section OurGoals========== */}

			{/*========start section Separator========== */}
			<Separator />
			{/*========end section Separator========== */}

			<Section>
				<SectionTitle 
					className="layout-container"
					style="md:max-w-lg mb-[90px]"
					title="Meet the awesome team behind Spoon."
					subtitle="We’re bridging the gap between the world’s oldest and largest industry and a future where technology can be used to solve our hardest problems."
				/>
				<SectionBody>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
						{teamData.map((item,index) => (
							<Team {...item} key={index}/>
						))}
					</div>
				</SectionBody>
			</Section>

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

export default About