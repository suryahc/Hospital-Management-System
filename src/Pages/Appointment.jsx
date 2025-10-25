import React, { useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';
import Footer from '../Components/Footer';
const Appointment = () => {
  const { doctors } = useContext(Appcontext)
  const [filter, setFilter] = useState(null)
  const { docId } = useParams()
   const [fil,setfil]=useState([])
   const navigate=useNavigate();
  useEffect(() => {
    console.log(docId)
    if (docId && Array.isArray(doctors) && doctors.length > 0) {
      const filteredDoctor = doctors.find(doc => doc._id === docId)
      if (filteredDoctor) {
        const filtered = doctors.filter(doc => doc.speciality === filteredDoctor.speciality && doc._id !== docId)
        setFilter(filteredDoctor)
        setfil(filtered)
      } else {
        setFilter(null)
        setfil([])
      }
    } else {
      setFilter(null)
      setfil([])
    }
  }, [docId, doctors])

  // If no doctor is selected yet, show a friendly placeholder
  if (!filter) {
    return (
      <div className='w-full mt-6'>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 md:w-1/4 bg-blue-600 rounded-md flex items-center justify-center">
            <p className='text-white p-4'>No doctor selected</p>
          </div>
          <div className="border border-gray-300 rounded-sm w-3/4 p-6">
            <h1 className='text-2xl font-semibold text-gray-700'>Please select a doctor</h1>
            <p className='text-gray-600 mt-2'>Use the doctors list to view details and book an appointment.</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap">
          {fil.map((doctor, index) => (
            <div onClick={() => navigate(`/appointment/${doctor._id}`)} key={index} className='flex flex-col items-center border border-[#EAEFFF] bg-none rounded-xl p-4 cursor-pointer m-2'>
              <div className="w-full h-48 flex items-center justify-center bg-[#EAEFFF] rounded-t-xl overflow-hidden pt-4">
                <img src={doctor.image} alt={doctor.name} className='h-full mb-0 rounded-t-xl'/>
              </div>
              <div className="bg-white flex items-center flex-col gap-1 w-full rounded-b-xl">
                <h2 className='text-lg font-semibold '>{doctor.name}</h2>
                <p className='text-sm text-gray-500 pb-4'>{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='w-full mt-6   '>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 md:w-1/4 bg-blue-600 rounded-md">
          <img src={filter?.image} alt="" className='h-full w-full max-w-[300px]'/>
        </div>
        <div className="border border-gray-300 rounded-sm w-3/4 p-6">
          <h1 className='text-3xl font-semibold text-gray-700'>{filter?.name}</h1>
          <p className='text-gray-600 mt-2'>{filter?.degree} - {filter?.speciality}  <span className='border border-gray-300 rounded-2xl text-xs px-1 '>{filter?.experience}</span></p>
          <br />
          <p className='font-semibold'>About!</p>
          <p className='text-gray-600 mt-1'>{filter?.about}</p>
          <br />
          <h3>Appointment fees: {filter?.fees}</h3>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-start gap-2">
        <h2 className='font-semibold text-center text-3xl'>Related Doctors</h2>
        <p className=' text-center'>Simply browse through our extensive list of trusted doctors</p>
        <div className="flex flex-col sm:flex-row gap-1 items-start">
          {fil.map((doctor,index)=>(
            <div  key={index} onClick={() => navigate(`/appointment/${doctor._id}`)} className='flex flex-col items-center border  border-[#EAEFFF]   rounded-xl cursor-pointer m-2'>
              <div className="w-full h-48 flex items-center justify-center bg-[#EAEFFF] p-6   rounded-t-xl overflow-hidden pt-4">
                <img src={doctor.image} alt={doctor.name} className='h-full  flex-shrink-0 mb-0 rounded-t-xl  '/>
              </div>
              <div className="bg-white flex items-center flex-col gap-1 w-full rounded-b-xl">
                <h2 className='text-lg font-semibold '>{doctor.name}</h2>
                <p className='text-sm text-gray-500 pb-4'>{doctor.speciality}</p>
              </div> 
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Appointment