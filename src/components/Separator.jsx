import React from 'react'

const Separator = ({bg}) => {
  return (
    <div className={`${bg ? bg :""}`}>
      <div className="layout-container">
        <div className="h-[1px] border-t-[1px] border-solid border-gray-200"></div>
      </div>
    </div>
  )
}

export default Separator