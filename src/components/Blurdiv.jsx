import React from 'react'

const Blurdiv = ({className,children}) => {
  return (
   <div className={`border-2 border-white/10  p-8 rounded-[45px] bg-white/5 backdrop-blur-[5px] ${className}`}>{children}</div>
  )
}

export default Blurdiv