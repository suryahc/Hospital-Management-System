import React, { use } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='bg-[#5F6FFF] py-10 my-20 rounded-lg flex flex-col sm:flex-row justify-between items-center w-full gap-2 px-4 md:px-10 lg:px-20'>
         <div className="sm:w-1/2 flex-1   text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold lg:pl-5  text-white flex flex-col items-start gap-6 ">
            <h1 className=' '>Book Appointment </h1>
             <h1 className=''>With  100+ Trusted Doctors</h1> 
          <button onClick={() => navigate('')} className='bg-white rounded-full px-4 py-2 text-gray-700 text-sm cursor-pointer hover:scale-105 duration-300 '>Create account</button>
         </div>
            <div className="relative hidden md:block md:w-1/2 text-sm text-white font-light">
                <img src={assets.appointment_img} alt="image" className=' absolute right-0 max-w-md top-[-158px] h-[280px] object-cover ' />
            </div>
    </div>
  )
}

export default Banner