import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets_frontend/assets'
const Speciality = () => {
  return (
    <div id="speciality" className='my-20' >
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className='font-semibold text-3xl'>Find by Speciality </h1>
            <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.</p>
        </div>
     
        <div
            className="flex flex-row gap-3 sm:justify-center w-full overflow-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
            <style>
                {`
                #speciality .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                `}
            </style>
            <div className="hide-scrollbar flex flex-row gap-3 sm:justify-center pt-5 w-full">
                {specialityData.map((item,index)=>(
                    <Link
                        key={index}
                        to={`/alldoctors/${item.speciality}`}
                        className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer hover:-translate-y-2 transition-all duration-300 pt-2 "
                    >
                        <img src={item.image} alt={item.speciality} className='w-16 sm:w-24 mb-2'/>
                        <p className='text-xs'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Speciality
