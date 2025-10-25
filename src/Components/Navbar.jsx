import React from "react";
import logo from "../assets/assets_frontend/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token,settoken]=useState(true);
  return (
    <div className="">
      <header className=" h-20 text-black flex items-center justify-between mx-auto">
        <div>
          <img src={logo} className="w-44 cursor-pointer" alt="Logo" />
        </div>

        <ul className=" hidden sm:flex  uppercase font-medium gap-6 items-center">
          <NavLink to="/" className="flex flex-col items-center space-y-1">
            <li>Home</li>
            <hr
              className="h-0.5 w-3/4 border-none outline-none m-auto bg-[#5F6FFF] 
                 opacity-0 transition-opacity duration-400"
            />
          </NavLink>

          <NavLink to="/alldoctors" className="flex flex-col items-center space-y-1">
            <li> All Doctors </li>
            <hr className="h-0.5   w-3/4 border-none outline-none m-auto bg-[#5F6FFF] opacity-0 transition-opacity duration-400" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center space-y-1">
            <li> About </li>
            <hr className="h-0.5   w-3/4 border-none outline-none m-auto bg-[#5F6FFF] opacity-0 transition-opacity duration-400" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center space-y-1">
            <li>Contact</li>
            <hr className="h-0.5   w-3/4 border-none outline-none m-auto bg-[#5F6FFF] opacity-0 transition-opacity duration-400" />
          </NavLink>
        </ul>

        <div className="hidden sm:flex ">
          {token?
             <div className="flex  items-center group relative gap-2 cursor-pointer ">
              <img src={assets.profile_pic} alt=""   className="w-8 rounded-full h-auto "/>
              <img src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-10 group-hover:block hidden  font-medium text-gray-600 z-20">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p  onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My profile</p>
                 <p onClick={()=>navigate('/appointments')} className="hover:text-black cursor-pointer">My Appoinments</p>
                 <p onClick={()=>settoken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
                 
              </div>
             </div>
         : <button   onClick={() => navigate("/login")} className="bg-[#5F6FFF] text-white px-6 py-3 font-semibold rounded-full cursor-pointer hover:bg-[#4b54cc]" >
            Create Account
          </button>}
        </div>
       <div className="sm:hidden ml-auto">
          <i 
            className="fa-solid fa-bars cursor-pointer text-1xl"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <ul className="absolute top-20 right-0 bg-white shadow-md flex flex-col gap-4 p-6 w-48 z-50 sm:hidden">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/alldoctors" onClick={() => setMenuOpen(false)}>
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        )}

      </header>
      <hr className="h-0.25 w-full border-none outline-none m-auto bg-gray-700" />
    </div>
  );
};

export default Navbar;
