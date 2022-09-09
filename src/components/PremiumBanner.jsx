import React from 'react'
import { Button } from '.'
import { premiumBanner } from '../assets/images'

const PremiumBanner = () => {
	
	return (
		<div className="relative ">
			<img src={premiumBanner} alt="premium-banner" className="absolute top-0 left-0 right-0 w-full h-full -z-10 object-cover"/>
			<div className="layout-container py-20 lg:py-32">
				<div className="bg-primary-color max-w-sm py-[60px] px-[50px] ml-auto">
					<div className="text-base text-white font-bold flex items-center gap-5 mb-8">Go Premium <span className="w-8 h-[2px] bg-white"></span></div>
					<div className={`text-2xl text-white font-bold leading-9 mb-12`}>
						Tation temporibus ei usu, vim an eirmod accus cu. 
						<span className="text-white font-light">Tibique suscipiantur, per ex scripta fabellas petentium.</span>
					</div>
					<Button text="Go Premium" style={{backgroundColor:"white",color:"black"}} />
				</div>
			</div>
		</div>
	)
}

export default PremiumBanner