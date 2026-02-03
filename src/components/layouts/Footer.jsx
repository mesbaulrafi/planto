import React from 'react'
import Conteinar from '../Conteinar'
import Images from '../Images'
import FooterLogo from '/src/assets/footerLogo.png'
import Button from '../Button'

const Footer = () => {
  return (
    <footer className='py-10'>
    <Conteinar className="">
      <div className="flex justify-between">
        {/* 1 */}
        <div className="">
          <Images imgSrc={FooterLogo}/>
          <p className='pt-11 pb-30 pl-3.5 text-[28px]  text-white w-145'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className='flex items gap-x-15'>
            <li className='text-white font-extrabold text-2xl'>FB</li>
            <li className='text-white font-extrabold text-2xl'>TW</li>
            <li className='text-white font-extrabold text-2xl'>LI</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="">
          <h4 className='pb-12 text-2xl font-extrabold  text-white'>Quick Link’s</h4>
          <ul>
            <li className='text-2xl  text-white pb-6.5'>Home</li>
            <li className='text-2xl  text-white pb-6.5'>Type’s Of plant’s</li>
            <li className='text-2xl  text-white pb-6.5'>Contact</li>
            <li className='text-2xl  text-white'>Privacy</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="">
            <h4 className='pb-12 text-2xl font-extrabold  text-white'>For Every Update.</h4>
          <div className="flex items-center justify-between border border-white rounded-lg p-1.5  max-w-[450px]">
            <input type="text" name="" id="" placeholder='Enter Email' className='bg-transparent text-white outline-none '  />
            <Button btnText={'SUBSCRIBE'} className={'bg-white text-black! font-bold text-sm rounded-lg '}/>
          </div>
          <div className=""><p className='text-2xl font-light text-white pt-50'>planto © all right reserve</p>
          </div>
        </div>
      </div>
    </Conteinar>
    </footer>
  )
}

export default Footer