import React from 'react'

const Question = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {data.map((item,index) => (
            <div className="" key={index}>
                <div className="text-bade text-black font-bold mb-3">{item.title}</div>
                <p className="text-sm text-gray-999 font-ibm">{item.desc}</p>
            </div>
        ))}
    </div>
  )
}

export default Question