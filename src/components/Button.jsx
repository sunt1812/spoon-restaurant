import React from 'react'

const Button = ({text,style}) => {
  return (
      <button 
        type="button" 
        style={style}
        className={`py-4 px-8 rounded-md bg-primary-color text-white text-base font-bold hover:bg-primary-color-hover duration-100`}>
          {text}
      </button>
  )
}

export default Button