import React from 'react'
import { Button } from '.'
import { imageHeader } from '../assets/images'

const Hero = () => {
  return (
    <section className="relative">
        <img src={imageHeader} className="absolute top-0 left-0 right-0 w-full h-full -z-10 object-cover" alt="" />
        <div className=" pt-52 pb-32 px-7 text-center">
            <div className="text-5xl lg:text-7xl text-white font-bold mb-8">Propel your business.</div>
            <p className="text-sm font-ibm mb-16 text-white">Propel comes with everything you need to get your business rolling.Get Started</p>
            <Button text="Get Started" />
        </div>
    </section>
  )
}

export default Hero