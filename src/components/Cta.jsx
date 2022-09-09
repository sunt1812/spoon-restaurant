import React from 'react'
import { Button } from '.'

const Cta = ({heading,children,btnText}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2">
            <div className="text-base text-primary-color font-bold flex items-center gap-5 mb-5">{heading}<span className="w-8 h-[2px] bg-primary-color"></span></div>
            {children}
        </div>
        <div className="w-full md:w-1/2 md:text-end">
            <Button text={btnText}/>
        </div>
    </div>
  )
}

export default Cta