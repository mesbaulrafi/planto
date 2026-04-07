
import React from 'react'
import Blurdiv from '../Blurdiv'
import Button from '../Button'

const Contact = () => {
  return (
    <section className="py-20 bg-[#0d110d]  flex flex-col items-center">
      <div className="container mx-auto px-4">
        <h2 className='font-inter font-semibold text-[48px] text-center pb-16 text-white'>
          Contact Us
        </h2>
        
        <Blurdiv className="max-w-[500px] m-auto flex flex-col gap-5">
          {/* Name Input */}
          <input 
            type="text" 
            placeholder='Name' 
            className="w-full bg-[#5e635b] border-none outline-none p-4 rounded-[20px] text-white placeholder:[#a0a29e]"
          />
          
          {/* Email Input */}
          <input 
            type="email" 
            placeholder='Email' 
            className="w-full bg-[#5e635b] border-none outline-none p-4 rounded-[20px] text-white placeholder:[#a0a29e]"
          />
          
          {/* Message Textarea */}
          <textarea 
            placeholder='Message' 
            rows="6"
            className="w-full bg-[#3d4339] border-none outline-none p-4 rounded-[25px] text-white placeholder:[#a0a29e] resize-none"
          ></textarea>
          
          {/* Submit Button Centering */}
          <div className="flex justify-center mt-2">
             <button className='bg-[#373d32] text-white text-4xl font-bold rounded-[40px]  backdrop-blur-[5px] py-4 px-[70px]'>Submit</button>
          </div>
        </Blurdiv>
      </div>
    </section>
  )
}

export default Contact