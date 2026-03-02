import React from 'react'
import bannerImage  from "../images/banner-image.jpg"
import bannerImageMobile from "../images/banner-image-mobile.jpg"
import BookingArea from "./BookingArea";

const Banner = () => {
  return (
    <div className='relative w-full h-[580px] lg:h-[520px]'>

      {/* Background Images */}
      <img 
        src={bannerImage} 
        alt="image" 
        className='hidden lg:block w-full h-full object-cover' 
      />
      <img 
        src={bannerImageMobile} 
        alt="image" 
        className='lg:hidden w-full h-full object-cover' 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Booking Area */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-4 lg:px-20">
        <BookingArea />
      </div>

    </div>
  )
}

export default Banner