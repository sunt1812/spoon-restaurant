import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '.'

const PricingInfo = ({title,number,desc,links,className}) => {
  return (
    <div className={`shadow-3xl hover:shadow-3xxl duration-300 bg-white ${className} relative`}>
        <div className="py-12 px-10">
            <div className="text-bs text-black mb-3">{title}</div>
            <div className="text-7xl font-bold mb-5">{number} <span className="text-sm text-gray-999 font-ibm">USD</span> </div>
            <p className="text-[12px] text-gray-999 font-ibm">{desc}</p>
            <div className="w-full h-[1px] bg-primary-color my-8"></div>
            <div className="flex flex-col mb-8">
                {links.map((item,index)=> (
                    <Link to="/" key={index} className="text-[12px] text-black font-ibm my-2 font-light">{item.display}</Link>
                ))}
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <Button text="Get Started" style={{width:"100%",borderRadius:"0"}} />
        </div>
    </div>
  )
}

export default PricingInfo