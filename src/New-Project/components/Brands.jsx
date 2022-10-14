import React from 'react'
import { Slide } from 'react-slideshow-image'
import acer from '../products/brands/acer.svg'
import apple from '../products/brands/apple.svg'
import asus from '../products/brands/asus.svg'
import canon from '../products/brands/canon.svg'
import dell from '../products/brands/dell.svg'
import hp from '../products/brands/hp.svg'
import lenovo from '../products/brands/lenovo.svg'
import lg from '../products/brands/lg.svg'
import microsoft from '../products/brands/microsoft.svg'
import sony from '../products/brands/sony.svg'
import samsung from '../products/brands/samsung.svg'

function Brands() {
  return (
    <div>
      <h2 className="text-center  text-2xl font-normal text-gray-500 pt-8 pb-4 uppercase ">
        Our <span className="text-blue-400 ">Brand</span>
      </h2>
      <div className="border-b-5   bg-blue-400 w-24 mx-auto h-4 mb-8 rounded" />
      <Slide indicators={true} arrows={false}>
        <div className="flex items-center justify-around">
          <img src={acer} alt="brands" className="w-32" />
          <img src={apple} alt="brands" className="w-24 h-14" />
        </div>
        <div className="flex items-center justify-around">
          <img src={samsung} alt="brands" className="w-32" />
          <img src={asus} alt="brands" className="w-32 " />
        </div>
        <div className="flex items-center justify-around">
          <img src={canon} alt="brands" className="w-32" />
          <img src={samsung} alt="brands" className="w-32" />
        </div>
        <div className="flex items-center justify-around">
          <img src={hp} alt="brands" className="w-16 h-14" />
          <img src={dell} alt="brands" className="w-16 h-14" />
        </div>
        <div className="flex items-center justify-around">
          <img src={lenovo} alt="brands" className="w-32" />
          <img src={microsoft} alt="brands" className="w-32" />
        </div>
        <div className="flex items-center justify-around">
          <img src={sony} alt="brands" className="w-32" />
          <img src={lg} alt="brands" className="w-32" />
        </div>
      </Slide>
    </div>
  )
}

export default Brands
