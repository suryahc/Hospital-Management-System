import React from 'react'
import Header from '../Components/Header'
import Speciality from '../Components/Speciality'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div className='w-full'>
       <Header/>
       <Speciality/>
       <TopDoctors/>
       <Banner/>
       <Footer/>
    </div>
  )
}

export default Home