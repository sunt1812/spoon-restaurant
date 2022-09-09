import React from 'react'
import { heroBanner } from '../assets/images'

const HeroBanner = () => {
  return (
    <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 md:h-1/5 w-full bg-primary-color -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-4/5 w-full bg-white -z-10"></div>
        <img src={heroBanner} alt="" className="px-[15px] lg:px-8 max-h-[720px w-full]"/>
    </div>
  )
}

export default HeroBanner