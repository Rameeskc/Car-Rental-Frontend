import React from 'react'
import Banner from '../../components/user/Banner'
import BookingArea from '../../components/user/BookingArea'
import Heading from '../../components/user/Heading'
import Carslist from '../../components/user/Carslist'
import Process from '../../components/user/Process'
import Review from '../../components/user/Review'

const Home = () => {
  return (
    <div >
      <Banner />
      <Heading name="How To Rent A Car"/>
      <Process/>
      <Heading name="Top Cars List In Kozhikode"/>
      <Carslist />
      <Review/>
    </div>
  )
}

export default Home
