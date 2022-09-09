import React from 'react'

const Section = ({children ,style}) => {
    return (
        <div className={`py-20 lg:py-32 ${style}`}>
            {children}
        </div>
    )
}

export const SectionTitle = ({title ,subtitle ,style,className}) => {
    return (
        <div className={`${className ? className :""}`}>
            <div className={`text-2xl text-black font-bold ${style}`}>
                {title}
                <span className="text-gray-999 font-light">{subtitle}</span>
            </div>
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className="layout-container">
            {props.children}
        </div>
    )
}
export default Section