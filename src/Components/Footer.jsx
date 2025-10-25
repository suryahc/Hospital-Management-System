import React from 'react'
import logo from "../assets/assets_frontend/logo.svg";
const Footer = () => {
  return (
    <div className='my-20'>
         <section className='flex flex-row gap-80 items-center'>
            <div className="flex flex-col justify-center gap-6">
                 <img src={logo} alt="Logo" className='w-44' />
                 <p className='text-sm max-w-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, architecto culpa similique voluptate omnis ipsam modi cum accusamus aut veniam fugit ex doloribus maxime perspiciatis autem delectus reiciendis rerum! Sed.</p>
            </div>
            <div className="flex flex-row justify-between  gap-48">
                <div className="">
                    <h1 className='text-lg font-semibold'>Company</h1>
                    <ul>
                        <li><a href="#" className='text-sm'>About Us</a></li>
                        <li><a href="#" className='text-sm'>Careers</a></li>
                        <li><a href="#" className='text-sm'>Contact</a></li>
                        <li><a href="#" className='text-sm'>Blog</a></li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='text-lg font-semibold'>Get in touch</h1>
                    <ul>
                        <li>+000000000</li>
                        <li>Fullstack devlopee</li>
                    </ul>
                </div>
            </div>
         </section>
    </div>
  )
}

export default Footer