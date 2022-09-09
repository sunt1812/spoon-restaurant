import React from 'react'

const Facts = ({data}) => {
    console.log(data)
  return (
    <div className="relative">
        <div className="absolute top-0 left-0 right-0 w-full h-1/4 bg-white -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-3/4 bg-gray-fa -z-10"></div>
        <div className="layout-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-5">
                {data.map((item,index) => (
                    <FactsItem {...item} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

const FactsItem = ({icon,title,desc}) => (
    <div className=" py-12 px-10 bg-white shadow-3xl self-stretch md:hover:-translate-y-2 duration-300">
        <img src={icon} alt="" />
        <div className="text-base text-black font-semibold mt-5 mb-3">{title}</div>
        <div className="text-sm text-gray-999 font-ibm">{desc}</div>
    </div>
)
export default Facts