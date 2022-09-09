import React from 'react'
import { premium01, premium02 } from '../assets/images'

const PremiumSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mb-20">
        <img src={premium01} className="md:mr-8 lg:mr-24  h-72 lg:h-80 w-10/12 lg:w-auto mx-auto lg:ml-0 mb-16 md:mb-0 object-cover" alt="" />
        <div className="max-w-sm mx-auto md:mr-8 lg:ml-0 lg:mr-24">
          <div className="text-2xl text-black font-bold">
            Promoting your business and services with Propel:
            <span className="text-gray-999 font-light">A responsive, multi-page business template with everything you need propel your business.</span>
          </div>
          <p className="mt-6">Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-end">
        <img src={premium02} className="md:ml-8 lg:ml-24 md:order-2 h-72 lg:h-80 w-10/12 lg:w-auto mx-auto lg:mr-0 mb-16 md:mb-0 object-cover" alt="" />
        <div className="max-w-sm mx-auto lg:mr-0 md:ml-8 lg:ml-24">
          <div className="text-2xl text-black font-bold">
            Promoting your business and services with Propel:
            <span className="text-gray-999 font-light">A responsive, multi-page business template with everything you need propel your business.</span>
          </div>
          <p className="mt-6">Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</p>
        </div>
      </div>
    </>
  )
}

export default PremiumSection