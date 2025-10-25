import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'
const TopDoctors = () => {
 const navigate=useNavigate()
 const { doctors } = useContext(Appcontext);
  return (
    <div className='my-20 '>
        <div className="flex flex-col justify-center items-center gap-2">
               <h1 className='text-3xl font-semibold text-center'>Top Doctors to Book</h1>
               <p className='text-center'>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 ">
            {doctors.map((doctor,index)=>(
                <div key={index} onClick={()=>navigate(`/appointment/${doctor._id}`)}  className='flex flex-col items-center  border hover:scale-105 transition-all   border-[#EAEFFF]  bg-none rounded-xl duration-300 cursor-pointer p-0'>
                    <div className="w-full h-48 flex items-center justify-center bg-[#EAEFFF] rounded-t-xl overflow-hidden pt-4">
                        <img src={doctor.image} alt={doctor.name} className='h-full  mb-0 rounded-t-xl  '/>
                    </div>
                    <div className="bg-white flex items-center flex-col gap-1 w-full rounded-b-xl">
                        <h2 className='text-lg font-semibold '>{doctor.name}</h2>
                        <p className='text-sm text-gray-500 pb-4'>{doctor.speciality}</p>
                    </div> 
                </div>
            ))}
        </div>
        <Link className="flex justify-center mt-10 " to="/alldoctors" onClick={() => scrollTo(0, 0)}>
            <button className='bg-[#EAEFFF] text-[#4B5563] px-8 py-2 font-semibold rounded-full cursor-pointer hover:bg-[#EAEFFF] hover:scale-105 transition-all duration-300'>more</button>
        </Link>
    </div>
  )
}

export default TopDoctors