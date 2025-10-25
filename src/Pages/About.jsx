import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <div className='mt-10'>
          <h2 className='text-center sm:text-2xl text-gray-500'>ABOUT <b className='text-black-900'>US</b></h2>
           <div className="flex flex-col items-center md:flex-row gap-12  mt-5">
              <div className="">
                    <img src={assets.about_image} alt="" className='w-full md:max-w-[360px] h-auto'/>
              </div>
              <div className="flex flex-col justify-center gap-4   md:w-2/4">
                <p className='text-sm text-gray-600'>
                  Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
                </p>
                <p className='text-sm text-gray-600 '>
                  Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                </p>
                <h3 className='font-bold'>Our Vision</h3>
                <p className='text-sm text-gray-600'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                
                </div>
           </div>
           <div className="my-10 ">
            <h1 className='text-1xl sm:text-2xl '>WHY <b className='text-gray-500'>CHOOSE US</b></h1>
            <div className="flex flex-col md:flex-row my-4 ">
              <div className="flex flex-col gap-2 md:w-1/3 md:px-16 md:py-16 border border-gray-200 p-8 hover:bg-blue-900 hover:text-white transition-all duration-300">
                <h1 className='font-bold'>EFFICIENCY</h1>
                <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
              </div>
              <div className="flex flex-col gap-2 md:w-1/3 md:px-16 md:py-16 p-8  hover:bg-blue-900 hover:text-white transition-all duration-300 border border-gray-200 ">
                <h1 className='font-bold'>ACCESSIBILITY</h1>
                <p>Easy access to your health records and appointment history at your fingertips.</p>
              </div>
              <div className="flex flex-col gap-2 md:w-1/3 md:px-16 md:py-16 p-8 hover:bg-blue-900 hover:text-white transition-all duration-300 border border-gray-200 ">
                <h1 className='font-bold'>SUPPORT</h1>
                <p>Dedicated support team to assist you with any questions or concerns.</p>
              </div>
            </div>
           </div>
           <Footer/>
           <hr />
           <div className="my-5 text-center">      
                <h3 className='font-light text-black-900'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</h3>
           </div>
    </div>
  )
}

export default About