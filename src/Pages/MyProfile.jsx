import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets_frontend/assets'
const MyProfile = () => {
  const[isedit,setisedit]=useState(false);
  const [userdate,setuserdata]=useState
  (
    {
      name:"Surya H C",
      image:assets.profile_pic,
      email:"Suryahc320@gmail.com",
      phone:"9876543210",
      address:{
        line1:"Chickmagalore tarikere",
        line2:"Hadikere"
      },
      gender:"Male",
      dob:"17-05-2002"
    }
  )
  // Load saved profile from localStorage if present
  useEffect(() => {
    try {
      const raw = localStorage.getItem('myprofile')
      if (raw) {
        setuserdata(JSON.parse(raw))
      }
    } catch (e) {
      console.warn('Failed to load profile from localStorage', e)
    }
  }, [])
  return (
    <div >
         <div className=" max-w-lg flex flex-col gap-2 my-5">
               <img src={userdate.image} alt=""  className='w-36 rounded '/>
  
               {
                isedit?
                <input type="text" onChange={e=>setuserdata(prev=>({...prev,name:e.target.value}))} value={userdate.name} className='bg-gray-50 text-3xl mt--4 font-medium'/>
                : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userdate.name}</p>
               }
                <hr className='bg-zinc-400 h-[1px] border-none'/>

                <div className="">
                  <p className='text-neutral-500 underline mt-3'>CONTACT  INFORMATION</p>
                  <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                    <p className='font-medium'>Email Id:</p>
                    <p className='text-blue-500'>{userdate.email  }</p>
                    <p className='font-medium'>Phone:</p>
                    {
                      isedit?
                      <input type="text" onChange={e=>setuserdata(prev=>({...prev,phone:e.target.value}))} value={userdate.phone} className='border border-gray-300 rounded px-3 py-2 mb-3'/>
                      : <p className='text-blue-400'>{userdate.phone}</p>
                    }
                    <p className='font-medium'>Address</p>
                    {
                      isedit?
                       <div className="">
                         <input type="text" className='bg-gray-50' onChange={e=>setuserdata(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userdate.address.line1}/>
                         <br />
                        <input type="text" className='bg-gray-50' onChange={e=>setuserdata(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} value={userdate.address.line2} />
                       </div>:
                       <div className="">
                        <p>{userdate.address.line1}</p>
                        <br />
                        <p>{userdate.address.line2}</p>
                       </div>
                    }
                  </div>
                </div>
                <div className="">
                  <p className='text-neutral-500 underline mt-3 '>Basic Information</p>
                  <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                    <p>Gender</p>
                    {
                      isedit?
                      <select className='max-w-20 bg-gray-100' onChange={e=>setuserdata(prev=>({...prev,gender:e.target.value}))} value={userdate.gender}>
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                      </select>:

                      <p>{userdate.gender}</p>
                    }
                
                    <p>DOB</p>
                    {
                      isedit ?
                      <input type="text" className="border rounded px-2 py-1 mt-1" value={userdate.dob} onChange={e=>setuserdata(prev=>({...prev,dob:e.target.value}))} />
                      : <p className='font-medium'>{userdate.dob}</p>
                    }
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    className={`px-4 py-2 rounded text-white ${isedit ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'}`}
                    onClick={() => setisedit(true)}
                    disabled={isedit}
                  >
                    Edit
                  </button>

                  <button
                    className={`px-4 py-2 rounded text-white ${isedit ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                    onClick={() => {
                      if (!isedit) return
                      try {
                        localStorage.setItem('myprofile', JSON.stringify(userdate))
                        console.log('Saved', userdate)
                      } catch (e) {
                        console.warn('Failed to save profile', e)
                      }
                      setisedit(false)
                    }}
                    disabled={!isedit}
                  >
                    Save information
                  </button>
                </div>
         </div>
    </div>
  )
}

export default MyProfile