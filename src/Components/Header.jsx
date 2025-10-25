import React from 'react'
import headerImg from '../assets/assets_frontend/header_img.png'
import group_profiles from '../assets/assets_frontend/group_profiles.png'
const Header = () => {
  return (
    <div className='w-full rounded-sm  bg-[#5F6FFF] mt-4 flex flex-col md:flex-row flex-wrap  text-white px-6 md:px-10 lg:px-20'>
         <div className="md:w-1/2 flex flex-col items-start justify-center p-4 py-10 m-auto  gap-4 md:py-[10vw] md:mb-[-30px]">
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold  leading-tight md:leading-tight lg:leading-tight'>Book Appointment  <br />  with Trusted Doctors</h1>
              <div className="flex flex-col items-center justify-center md:flex-row gap-3 text-sm text-white font-light">
                <img src={group_profiles} alt="img" className='w-28'/>
                <p className=''>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.</p>
              </div>
                <a href='#Speciality' className='flex sm:m-0 mx-auto cursor-pointer text-[#595959] rounded-full px-6 py-2 bg-white border-none outline-none hover:scale-105 transition-all duration-300'>Book appointment -</a>

         </div>
         <div className="md:w-1/2 relative ">
                <img src={headerImg} alt="header-img" className='w-full md:absolute bottom-0 rounded-lg h-auto' />
         </div>
    </div>
  )
}

export default Header