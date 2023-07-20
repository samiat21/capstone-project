import React from 'react'
import {IoArrowForwardOutline} from 'react-icons/io5'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-[#1d2951] mt-[200px]'>
    <div className='md:flex md:flex-row grid grid-cols-2 space-x-28 '>
        <div className='flex flex-col md:pl-[400px] sm:pl-[100px] pt-12'>
        <ul className='space-y-3'>
            <li className='text-white hover:text-black'>Explore</li>
            <Link href="/doctors"><li className='pt-4 hover:text-white'>Doctors</li></Link>
            <Link href="/services"><li className='hover:text-white'>Services</li></Link>
            <Link href="/support"><li className='hover:text-white'>How it Works</li></Link>
        </ul>
        </div>
        <div className='flex flex-col pt-12 space-y-16'>
        <ul className='space-y-3'>
           <Link href="/support"> <li className='text-white hover:text-black'>Support</li></Link>
          <Link href="/about"><li className='pt-4 hover:text-white'>About</li></Link>
           <Link href="/services"> <li className='hover:text-white'>Services</li></Link>
            <li>Terms & Conditions</li>
        </ul>
        </div>
        <div className='flex flex-col pt-12 space-y-16'>
        <ul  className='space-y-3'>
            <Link href="/"><li className='text-white hover:text-black'>Links</li></Link>
           <Link href="/"> <li className='pt-4 hover:text-white'>Home</li></Link>
         <Link href="/services"><li className='hover:text-white'>Services</li></Link>
         <Link href="/about"><li className='hover:text-white'>How it Works</li></Link>
        </ul>
        </div>

        <div className="pt-12 flex-col">
          <p>Subscribe Newletter</p>
          <div className=''>
            <div className="">
        <div className=""><input type="email" name="email" id="email" placeholder='Enter Your Email' className='bg-inherit border-b-2 pt-6 pb-2' /></div>
        <button type="submit" className='bg-white mt-4 px-3'>submit</button>
        </div>
         <div className="flex flex-row mt-4 space-x-2">
         <Link href='https://www.facebook.com'><span><AiFillFacebook size={20} /></span></Link>
         <Link href='https://www.instagram.com'><span><AiFillInstagram size={20} /></span></Link>
         <Link href='https://www.twitter.com'><span><BsTwitter size={20} /></span></Link>
          </div>
          
          
          </div>
        </div>
       </div><br /><br />
       <div className="flex justify-center text-white pb-5">
            <p>Samnik&apos;s Health, Copyright &copy; 2023</p>
          </div>
  </div>
  )
}
