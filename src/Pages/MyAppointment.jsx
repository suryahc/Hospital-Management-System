import React from 'react'
import { Appcontext } from '../context/Appcontext';
import { useContext } from 'react';
const MyAppointment = () => {
  const {doctors} = useContext(Appcontext);
  return (
    <div>
            <h2 className='mt-10 font-medium text-zinc-800 border-b pb-3'>My Appointments</h2>
            <div className="flex flex-col gap-4 mt-5">
              {doctors.slice(0,2).map((doctor,index)=>(
                <div className="grid grid-cols-[1fr_2fr] sm:flex gap-6 border border-gray-500 p-4 rounded-md" key={index}>
                  <div className="">
                    <img src={doctor.image} alt="" className='w-24 h-auto rounded-md' />
                  </div>
                            
                            <div className="flex-1 text-sm text-zinc-600">
                              <h2 className=''>{doctor.name}</h2>
                              <p className='text-neutral-800'>{doctor.speciality}</p>
                               <p className='text-zinc-700 font-medium mt-1'>Adress:</p>
                               <p className='text-xs'>{doctor.address.line1}</p>
                               <p className='text-xs'>{doctor.address.line2}</p>
                               <p className='text-xs'><span>Date & Time:</span>25 July, 2025 | 8:30 pm</p>
                            </div>
                            <div className="flex flex-col gap-2 mt-14">
                              <button className='hover:bg-blue-600 p-2 bg-gray-200 hover:text-white text-xs min-w-48 text-stone-500 rounded-md cursor-pointer transition-all duration-300 '>Pay online</button>
                              <button className='hover:bg-red-600 bg-gray-200 hover:text-white p-2 text-xs min-w-48 text-stone-500 rounded-md cursor-pointer transition-all duration-300'>Cancel button</button>
                            </div>
                </div>
              ))} 
            </div>
    </div>
  )
}

export default MyAppointment