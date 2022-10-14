import React from 'react'
//import OwlCarousel from 'react-owl-carousel'
//import 'owl.carousel/dist/assets/owl.carousel.css'
//import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

function HomeCarousel() {
  return (
    <div>
      <Zoom scale={1.4} controls arrows={false}>
        <div
          className=" w-full bg-no-repeat bg-cover bg-center  "
          style={{
            height: '70vh',
            backgroundImage: 'url(/ecoms/images/promo/ipad.jpg)',
          }}
        ></div>
        <div
          className=" w-full bg-no-repeat bg-cover bg-center "
          style={{
            height: '70vh',
            backgroundImage: 'url(/ecoms/images/promo/iphone.jpg)',
          }}
        ></div>
        <div
          className="w-full bg-no-repeat bg-cover bg-center  "
          style={{
            height: '70vh',
            backgroundImage: 'url(/ecoms/images/promo/macbook-new.jpg)',
          }}
        ></div>
        <div
          className="w-full bg-no-repeat bg-contain bg-center object-cover "
          style={{
            height: '70vh',
            backgroundImage: 'url(/ecoms/images/articles/macbook-promo-2.jpg)',
          }}
        ></div>
      </Zoom>
    </div>
  )
}

export default HomeCarousel
