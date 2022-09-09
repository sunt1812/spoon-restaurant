import React from 'react'
import { premiumBanner2 } from '../assets/images'
import { iconFeature_02 } from '../assets/icon'

const PremiumIntro = () => {
    return (
        <>
            <img src={premiumBanner2} alt="banner" className="px-[15px]" />
            <div className="layout-container">
                <div className=" p-[40px] shadow-3xl flex gap-8 items-center lg:-mt-20 relative z-10 bg-white">
                    <img src={iconFeature_02} alt="" className="w-16 h-16"/>
                    <div className="">
                        <div className="mt-[25px] mb-3 text-base text-black font-semibold">Pro ad constituto el</div>
                        <p>Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PremiumIntro