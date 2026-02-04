import React from 'react'
import Conteinar from '../Conteinar'
import Topproduct from '../Topproduct'
import Tree2 from "/src/assets/tree2.png";
import Tree3 from "/src/assets/tree3.png";
import Buttomproduct from '../Buttomproduct';


const Trendyplants = () => {
  return (
   <>
   <Conteinar>
    {/* Top Sel  */}
         <div className="mb-40">
            <div className="text-center mb-25">
                <h2 className='broder-l-b text-[55px] font-semibold'>Our Trendy plants</h2>
            </div>
          <Topproduct productImg={Tree2} productTitle={'For Small Decs Ai Plat'} productDesription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua'} productPrice={'Rs. 599/-'}/>
         </div>
         {/* =========== */}
         <div className="">
          <Buttomproduct productImg={Tree3} productTitle={'For Small Decs Ai Plat'} productDesription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua'} productPrice={'Rs. 599/-'}/>
         </div>
   </Conteinar>
   </>
  )
}

export default Trendyplants