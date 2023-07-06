import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-around items-end bg-blue-500 text-white w-[100vw] h-[100px] pb-[40px] fixed top-0'>
        <div>
            <h2 className=''><span>Bra</span>vaa</h2>
        </div>
        <ul className='flex flex-row gap-6'>
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
    </nav>

  )
}
