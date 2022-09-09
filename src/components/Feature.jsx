import React from 'react'

const Feature = ({img ,title,desc,style}) => {
  return (
    <div className={`py-[50px] px-[40px]  shadow-3xl h-max hover:md:-translate-y-2 duration-200 ${style}`}>
      <img src={img} alt="" className="w-16 h-16"/>
      <div className="mt-[25px] mb-3 text-base text-black font-semibold">{title}</div>
      <p>{desc}</p>
    </div>
  )
}

export default Feature