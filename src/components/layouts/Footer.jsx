import React from 'react'
import Conteinar from '../Conteinar'
import Images from '../Images'
import FooterLogo from '/src/assets/footerLogo.png'

const Footer = () => {
  return (
    <footer className='py-10'>
    <Conteinar className="">
      <div className="flex ">
        {/* 1 */}
        <div className="">
          <Images imgSrc={FooterLogo}/>
          <p className='pt-11 pb-30 pl-3.5 text-[28px] font-medium text-white w-145'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className='flex items gap-x-15'>
            <li className='text-white font-extrabold text-2xl'>FB</li>
            <li className='text-white font-extrabold text-2xl'>TW</li>
            <li className='text-white font-extrabold text-2xl'>LI</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="">
          <h4 className='text-2xl font-medium text-white'>Quick Link’s</h4>
          <ul>
            <li className='text-2xl font-medium text-white'>Home</li>
            <li className='text-2xl font-medium text-white'>Type’s Of plant’s</li>
            <li className='text-2xl font-medium text-white'>Contact</li>
            <li className='text-2xl font-medium text-white'>Privacy</li>
          </ul>
        </div>
        {/* 3 */}
        <div className=""></div>
      </div>
    </Conteinar>
    </footer>
  )
}

export default Footer