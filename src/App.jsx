import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AllDoctors from './Pages/AllDoctors'
import Login from './Pages/Login'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment'
import MyProfile from './Pages/MyProfile'
const App = () => {
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/alldoctors' element={<AllDoctors/>}/>
        <Route path='/doctors/:speciality' element={<AllDoctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/appointments' element={<MyAppointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
    </div>
  )
}

export default App