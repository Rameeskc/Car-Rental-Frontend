import React from 'react'
import Banner from '../../components/Banner'
import BookingArea from '../../components/BookingArea'
import Heading from '../../components/Heading'
import Carslist from '../../components/Carslist'
import Process from '../../components/Process'
import Review from '../../components/Review'

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
