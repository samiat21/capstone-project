'use client'
import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {AiFillFacebook, AiFillInstagram } from 'react-icons/ai' 
import {BsTwitter} from 'react-icons/bs'

export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false)

 
  function handleNav(){
    setMenuOpen(!menuOpen)

  }



  return (
    <nav className='flex justify-between items-center bg-blue-500 text-white w-[100vw] h-[100px] px-6 fixed top-0'> 
        <div>
            <h2 className=''><span>Bra</span>vaa</h2>
        </div>
        <div className='hidden md:flex'>
        <ul className='hidden md:flex gap-6'>
            <Link href='/'>
            <li className='hover:underline  hover:text-[#1d2951]'>Home</li>
            </Link>
            <Link href='/about' className='hover:underline  hover:text-[#1d2951]'>
            <li>About Us</li>
             </Link>
            <Link href='/doctors' className='hover:underline  hover:text-[#1d2951]'>
            <li>Doctors</li>
            </Link>
            <Link href='/services' className='hover:underline  hover:text-[#1d2951]'>
            <li>Services</li>
            </Link>
            <Link href='/support' className='hover:underline  hover:text-[#1d2951]'>
          <li>Support</li> 
            </Link>
        </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-25" >
          <AiOutlineMenu size={25} />
          </div>
          <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[65%]  h-screen bg-blue-500 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
            <div className="flex w-full items-center justify-end">
              <div onClick={handleNav} className="cursor-pointer">
                <MdOutlineClose size={25} />
              </div>
            </div>
            <div className="flex-col py-4">
            <ul className=''>
            <Link href='/'>
            <li onClick={() => setMenuOpen(false)} className='hover:underline  hover:text-[#1d2951] py-4 cursor-pointer'>Home</li>
            </Link>
            <Link href='/about'>
            <li onClick={() => setMenuOpen(false)}  className='hover:underline  hover:text-[#1d2951] py-4 cursor-pointer'>About Us</li>
             </Link>
            <Link href='/doctors'>
            <li onClick={() => setMenuOpen(false)} className='hover:underline  hover:text-[#1d2951] py-4 cursor-pointer'>Doctors</li>
            </Link>
            <Link href='/services' >
            <li onClick={() => setMenuOpen(false)} className='hover:underline  hover:text-[#1d2951] py-4 cursor-pointer'>Services</li>
            </Link>
            <Link href='/support'>
          <li onClick={() => setMenuOpen(false)} className='hover:underline  hover:text-[#1d2951] py-4 cursor-pointer'>Support</li> 
            </Link>
        </ul>
            </div>
            <div className="flex flex-row justify-around pt-10 items-center">
          <Link href='https://www.facebook.com'><span><AiFillFacebook size={20} /></span></Link>
         <Link href='https://www.instagram.com'><span><AiFillInstagram size={20} /></span></Link>
         <Link href='https://www.twitter.com'><span><BsTwitter size={20} /></span></Link>
            </div>
          </div>
    </nav>

  )
}
