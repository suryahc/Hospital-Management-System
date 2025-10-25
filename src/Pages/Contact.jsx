import React from 'react'
import Footer from '../Components/Footer'
import { assets } from '../assets/assets_frontend/assets'
const Contact = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className='text-center text-2xl text-gray-700 font-semibold'>CONTACT <b className='text-black-900'>US</b></h1>
        <div className=" flex justify-center items-center">
           
        <div className="flex flex-col items-center justify-center md:flex-row gap-12 mt-5">
          <div className="">
              <img src={assets.contact_image} alt="Contact Us"  className='w-full max-w-[360px] h-full'/>
          </div>
          <div className="flex flex-col justify-center gap-4 md:w-2/4">
            <h1>Our office</h1>
            <div className="">
              00000 Willms Station
             Suite 000, Washington, USA
            </div>
             <div className="">
              Tel: (000) 000-0000
Email: greatstackdev@gmail.com
             </div>
             <h1>CAREERS AT PRESCRIPTO</h1>
             <p>Learn more about our teams and job openings.</p>
              <button className='border border-black-900 p-5 w-[200px] hover:bg-black cursor-pointer hover:text-white'>Explore Jobs</button>
          </div>
        </div>
       
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact