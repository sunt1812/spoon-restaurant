import React from 'react'

const HeroInner = ({heading,title,desc}) => {
  return (
    <section className="relative">
    <div className="absolute top-0 left-0 right-0 w-full h-full -z-10  bg-primary-color"></div>
    <div className="layout-container">
        <div className="pt-44 pb-24 max-w-[700px] ">
            <div className="text-base text-white font-bold flex items-center gap-5 mb-8">{heading}<span className="w-8 h-[2px] bg-white"></span></div>
            <div className="text-5xl lg:text-7xl lg:leading-[78px] text-white font-extrabold mb-8">{title}</div>
            <p className="text-sm font-ibm leading-6 text-white">{desc}</p>
        </div>
    </div>
</section>
  )
}

export default HeroInner