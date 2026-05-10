import React from 'react'
import Container from '../Container'
import Images from '../Images'
import FooterLogo from '/src/assets/footerLogo.png'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-10'>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 lg:gap-6">

          {/* 1 - Logo + Description + Social */}
          <div className="flex-1">
            <Images imgSrc={FooterLogo} />
            <p className='pt-8 md:pt-11 pb-10 md:pb-20 lg:pb-30 pl-0 md:pl-3.5 text-lg md:text-xl lg:text-[28px] text-white w-full max-w-[580px] lg:w-145'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className='flex items-center gap-x-8 md:gap-x-12 lg:gap-x-15'>
              <li className='text-white font-extrabold text-xl md:text-2xl'>FB</li>
              <li className='text-white font-extrabold text-xl md:text-2xl'>TW</li>
              <li className='text-white font-extrabold text-xl md:text-2xl'>LI</li>
            </ul>
          </div>

          {/* 2 - Quick Links */}
          <div className="shrink-0">
            <h4 className='pb-8 md:pb-12 text-xl md:text-2xl font-extrabold text-white'>Quick Link's</h4>
            <ul>
              <Link to={'/'}><li className='text-lg md:text-2xl text-white pb-5 md:pb-6.5'>Home</li></Link>
              <Link to={'/plantsType'}><li className='text-lg md:text-2xl text-white pb-5 md:pb-6.5'>Type's Of plant's</li></Link>
              <Link to={'/contact'}><li className='text-lg md:text-2xl text-white pb-5 md:pb-6.5'>Contact</li></Link>
              <Link to={'/Privacy'}><li className='text-lg md:text-2xl text-white'>Privacy</li></Link>
            </ul>
          </div>

          {/* 3 - Subscribe + Copyright */}
          <div className="shrink-0">
            <h4 className='pb-8 md:pb-12 text-xl md:text-2xl font-extrabold text-white'>For Every Update.</h4>
            <div className="flex items-center justify-between border border-white rounded-lg p-1.5 w-full max-w-[450px]">
              <input
                type="text"
                placeholder='Enter Email'
                className='bg-transparent text-white outline-none p-2 w-full'
              />
              <Button
                btnText={'SUBSCRIBE'}
                className={'bg-white text-black! font-bold text-sm rounded-lg whitespace-nowrap'}
              />
            </div>
            <p className='text-lg md:text-2xl font-light text-white pt-16 md:pt-32 lg:pt-50'>
              planto © all right reserve
            </p>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer