import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center mt-5'>
        <div>
            <h2 className='mr-[400px]'><span>Bra</span>vaa</h2>
        </div>
        <ul className='flex flex-row gap-6 mr-[400px]'>
            <Link href=''>
            <li>Home</li>
            </Link>
            <Link href=''>
            <li>About Us</li>
             </Link>
            <Link href=''>
            <li>Doctors</li>
            </Link>
            <Link href=''>
            <li>Services</li>
            </Link>
            <Link href=''>
          <li>Support</li>
            </Link>
        </ul>
    </nav>

  )
}
