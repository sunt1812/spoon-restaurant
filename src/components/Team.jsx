import React from 'react'

const Team = ({img,name,title}) => {
	return (
		<div className="shadow-3xl">
			<div className=" overflow-hidden">
				<img src={img} alt="" className="w-full max-h-72 md:hover:scale-[1.2] duration-300 object-cover"/>
			</div>
			<div className="pt-5 px-8 pb-3 bg-white">
				<div className="text-base font-bold text-black">{name}</div>
				<div className="text-sm text-gray-999 font-ibm">{title}</div>
			</div>
		</div>
	)
}

export default Team