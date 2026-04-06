
import React from 'react'
import Blurdiv from '../Blurdiv'
import Button from '../Button'

const Contact = () => {
  return (
    <section className="py-20 bg-[#0d110d] min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4">
        <h2 className='font-inter font-semibold text-[48px] text-center pb-16 text-white'>
          Contact Us
        </h2>
        
        <Blurdiv className="max-w-[500px] m-auto flex flex-col gap-5">
          {/* Name Input */}
          <input 
            type="text" 
            placeholder='Name' 
            className="w-full bg-[#3d423d] border-none outline-none p-4 rounded-[20px] text-white placeholder:text-gray-400"
          />
          
          {/* Email Input */}
          <input 
            type="email" 
            placeholder='Email' 
            className="w-full bg-[#3d423d] border-none outline-none p-4 rounded-[20px] text-white placeholder:text-gray-400"
          />
          
          {/* Message Textarea */}
          <textarea 
            placeholder='Message' 
            rows="6"
            className="w-full bg-[#3d423d] border-none outline-none p-4 rounded-[25px] text-white placeholder:text-gray-400 resize-none"
          ></textarea>
          
          {/* Submit Button Centering */}
          <div className="flex justify-center mt-2">
             <Button btnText={'Submit'} className="bg-[#3d423d] hover:bg-[#4a504a] text-white px-12 py-3 rounded-full transition-all font-medium" />
          </div>
        </Blurdiv>
      </div>
    </section>
  )
}

export default Contact