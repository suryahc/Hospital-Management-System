import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../Context/Appcontext'  
import { useNavigate, useParams } from 'react-router-dom';

const AllDoctors = () => {
  const {doctors} = useContext(Appcontext);
  const [filter, setfilter] = useState([]);
  const navigate = useNavigate();
  const {speciality}=useParams();


 useEffect(() => {    
 
    if(speciality) {   
      const filteredDoctors = doctors.filter(doc => doc.speciality === speciality);
      setfilter(filteredDoctors);
    } else {
      setfilter(doctors);
    } 
}, [ speciality]);

  return (
    <div className='w-full'>
      <h3 className='text-1xl text-gray-600 mt-5'>Browse through the doctors specialists.</h3>
       <div className="flex flex-col sm:flex-row  my-3">
            <div className="items-center  flex flex-col gap-3  md:items-start ">   
           
                       <button
  type="button"
  onClick={() => navigate(`/alldoctors/General physician`)}
  className={`w-[200px] items-center text-start px-2 border border-gray-300 py-2 rounded-md cursor-pointer 
    ${speciality === "General physician" ? "bg-indigo-100 text-black" : "bg-white"}`}
>
  <h2 className={`text-xs md:text-base ${speciality === "General physician" ? "text-black" : "text-gray-600"}`}>
    General physician
  </h2>
</button>

<button
  type="button"
  onClick={() => navigate(`/alldoctors/Gynecologist`)}
  className={`w-[200px] items-center text-start px-2 border border-gray-300 py-2 rounded-md cursor-pointer 
    ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : "bg-white"}`}
>
  <h2 className={`text-xs md:text-base ${speciality === "Gynecologist" ? "text-black" : "text-gray-600"}`}>
    Gynecologist
  </h2>
</button>

<button
  type="button"
  onClick={() => navigate(`/alldoctors/Dermatologist`)}
  className={`w-[200px] items-center text-start px-2 border border-gray-300 py-2 rounded-md cursor-pointer 
    ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : "bg-white"}`}
>
  <h2 className={`text-xs md:text-base ${speciality === "Dermatologist" ? "text-black" : "text-gray-600"}`}>
    Dermatologist
  </h2>
</button>

<button
  type="button"
  onClick={() => navigate(`/alldoctors/Pediatricians`)}
  className={`w-[200px] items-center text-start px-2 border border-gray-300 py-2 rounded-md cursor-pointer 
    ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : "bg-white"}`}
>
  <h2 className={`text-xs md:text-base ${speciality === "Pediatricians" ? "text-black" : "text-gray-600"}`}>
    Pediatricians
  </h2>
</button>

<button
  type="button"
  onClick={() => navigate(`/alldoctors/Neurologist`)}
  className={`w-[200px] items-center text-start px-2 border border-gray-300 py-2 rounded-md cursor-pointer 
    ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : "bg-white"}`}
>
  <h2 className={`text-xs md:text-base ${speciality === "Neurologist" ? "text-black" : "text-gray-600"}`}>
    Neurologist
  </h2>
</button>

<button
  type="button"
  onClick={() => navigate(`/alldoctors/Gastroenterologist`)}
  className={`w-[200px] items-center text-start px-2 border border-gray-300 py-2 rounded-md cursor-pointer 
    ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : "bg-white"}`}
>
  <h2 className={`text-xs md:text-base ${speciality === "Gastroenterologist" ? "text-black" : "text-gray-600"}`}>
    Gastroenterologist
  </h2>
</button>

                    
            </div>
            <div className="w-full  sm:ml-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {filter
  .map((doctor, index) => (

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

            </div>
       </div> 
    </div>
  )
}

export default AllDoctors