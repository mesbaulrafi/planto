import React, { Children } from 'react'

const Conteinar = ({className,children}) => {
  return (
    <div className={`max-w-[1120px] m-auto ${className}`}>{children}</div>
  )
}

export default Conteinar