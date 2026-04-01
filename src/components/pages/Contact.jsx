import React from 'react'
import Blurdiv from '../Blurdiv'
import Button from '../Button'

const Contact = () => {
  return (
   <>
   <div className="py-20">
    <div className="">
      <h2 className='font-inter font-semibold text-[55px] text-center pb-25'>Contact Us </h2>
      <Blurdiv className={'max-w-[714px] m-auto '}>
        <input type="text" name="" id="" placeholder='Name'/>
        <input type="email" name="" id="" placeholder='Name'/>
        <textarea name="" id="" placeholder='Message'></textarea>
        <Button btnText={'Submit'}/>
      </Blurdiv>
    </div>
   </div>
   </>
  )
}

export default Contact