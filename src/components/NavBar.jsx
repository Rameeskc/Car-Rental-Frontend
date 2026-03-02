import React from 'react'
import logo from "../images/a.png"
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "About Us"
    },
    {
      id: 3,
      title: "Contact Us"
    },
    {
      id: 4,
      title: "Services"
    },
    {
      id: 5,
      title: "Blog"
    }
  ]
  return (

    <div className='fixed top-0 left-0 z-50 w-full h-16 flex justify-between items-center bg-[rgb(6,19,19)]'>

      {/* Logo */}

      <div className='flex justify-center items-center w-1/2 lg:w-1/4 h-full'>
        <img
          src={logo}
          alt="logo"
          className='h-16 w-auto object-contain'
        />
      </div>

      {/* Desktop Menu */}

      <div className=' hidden lg:flex justify-center items-center w-2/4 h-full'>
        {navItems.map(item => (
          <div key={item.id} className="p-4 font-medium cursor-pointer text-white 
transition duration-300 ease-in-out 
hover:text-white hover:-translate-y-1 hover:scale-105">{item.title}</div>
        ))}
      </div>

      {/* Desktop Button */}

      <div className='hidden lg:flex justify-center items-center lg:w-1/4 h-full'>
        <button className='p-2 bg-white text-[rgb(6,19,19)] w-28 font-medium rounded-2xl'>login</button>
      </div>

      {/* Mobile Menu Button */}

      <div className='lg:hidden pr-4 w-1/2 flex justify-end items-center'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose size={28} color='white' /> : <IoMenu size={28} color='white' />}
        </button>
      </div>

      {/* Mobile Dropdown */}

      <div
        className={`absolute top-16 right-0 w-64 lg:hidden
  bg-[rgb(6,19,19)] shadow-md px-6 py-4 space-y-4
  transform transition-all duration-300 ease-in-out origin-top
  ${isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"}
  `}
      >
        {navItems.map(item => (
          <div
            key={item.id}
            className="font-medium cursor-pointer text-white hover:opacity-80"
          >
            {item.title}
          </div>
        ))}

        <button className='w-full py-2 bg-white text-[rgb(6,19,19)] font-medium rounded-2xl'>
          Login
        </button>
      </div>


    </div>

  )
}

export default NavBar