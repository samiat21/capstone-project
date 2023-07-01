import React from 'react'
import {IoArrowForwardOutline} from 'react-icons/io5'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-row space-x-28 bg-[#1d2951] w-full h-[300px] mt-[200px]'>
        <div className='flex flex-col pl-[400px] pt-12'>
        <ul className='space-y-3'>
            <li className='text-white'>Explore</li>
            <li className='pt-4'>Doctors</li>
            <li>Services</li>
            <li>How it Works</li>
        </ul>
        </div>
        <div className='flex flex-col pt-12 space-y-16'>
        <ul  className='space-y-3'>
            <li className='text-white'>Support</li>
            <li className='pt-4'>About</li>
            <li>Services</li>
            <li>Terms & Conditions</li>
        </ul>
        </div>
        <div className='flex flex-col pt-12 space-y-16'>
        <ul  className='space-y-3'>
            <li className='text-white'>Links</li>
            <li className='pt-4'>Home</li>
            <li>Services</li>
            <li>How it Works</li>
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
          <div className="">
            
          </div>
          
          </div>
        </div>
    
    
    </div>
  )
}
