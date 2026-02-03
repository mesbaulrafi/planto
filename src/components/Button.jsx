import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <button className={`cursor-pointer border border-white py-3.75 px-15 bg-transparent text-white rounded-xl  ${className}`}>{btnText}</button>
  )
}

export default Button