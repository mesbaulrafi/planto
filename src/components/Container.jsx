import React, { Children } from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`lg:max-w-[1410px] px-3 lg:px-0 m-auto ${className}`}>{children}</div>
  )
}

export default Container