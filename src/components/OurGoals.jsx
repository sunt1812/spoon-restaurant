import React from 'react'

const OurGoals = ({className,title,number,desc}) => {
  return (
    <div className={`${className}`}>
        <div className="text-base text-black mb-3">{number}</div>
        <div className="text-2xl text-black font-bold">{title}</div>
        <p className="text-gray-999 text-sm font-ibm">{desc}</p>
    </div>
  )
}

export default OurGoals