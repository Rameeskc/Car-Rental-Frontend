import React from 'react'
import bannerImage from "../images/banner-image.jpg"
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

      {/* Content Area */}
      <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-20">

        {/* Left Text Area */}
        <div className="text-white max-w-xl hidden lg:block">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Ride
          </h1>
          <p className="text-lg mb-6">
            Rent a car easily and travel comfortably. Choose from our wide
            range of vehicles at the best prices.
          </p>
        </div>

        {/* Booking Area */}
        <div>
          <BookingArea />
        </div>

      </div>

    </div>
  )
}

export default Banner