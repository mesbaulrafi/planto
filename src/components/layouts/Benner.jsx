import React from 'react'
import Conteinar from '../Conteinar'
import Button from '../Button'
import Images from '../Images';
import PlayBtn from '/src/assets/playBtn.png'
import { Link } from 'react-router-dom';



const Benner = () => {
  return (
    <>
    <div className="bg-[url('/src/assets/bg_home.png')] bg-center bg-no-repeat py-25">
      <Conteinar>
        <div className="">
          {/* Text Top */}
          <div className="">
            <h1 className='text-[118px] text-[#c6c8c5] font-semibold'>Breath Natural </h1>
            <p className='text-[#c6c8c5] text-2xl font-medium w-[880px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex gap-x-9">
              <Button btnText={'Explore'} className={'text-[#c6c8c5]'}/>
              <Link to={''}><Images imgSrc={PlayBtn}/></Link>
            </div>
          </div>
        </div>
      </Conteinar>
    </div>
    </>
  )
}

export default Benner