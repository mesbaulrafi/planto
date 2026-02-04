import React from 'react'
import Benner from '../layouts/Benner'
import Trendyplants from '../layouts/Trendyplants'

const BennerTow = () => {
  return (
    <div className="bg-[url('/src/assets/bg_home.png')] bg-center bg-no-repeat py-25">
    <Benner/>
    <Trendyplants/>
    </div>
  )
}

export default BennerTow